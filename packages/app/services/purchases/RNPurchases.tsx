import * as Device from 'expo-device'
import { Platform } from 'react-native'
import Purchases from 'react-native-purchases'
import { showMessage } from 'react-native-flash-message'

import { REVENUE_CAT } from 'app/constants/keys.local'
import { setTierToPro } from 'app/services/redux/reducers/subscriptionSlice'

class RNPurchases {
  async configure() {
    const { OS } = Platform
    if (Device.isDevice) {
      try {
        Purchases.setDebugLogsEnabled(true)
        if (OS === 'android') {
          await Purchases.configure({ apiKey: REVENUE_CAT.android })
        }
        if (OS === 'ios') {
          Purchases.configure({ apiKey: REVENUE_CAT.apple })
        }
      } catch (e) {
        console.log({ e })
      }
    }
  }
  async fetchOffering(onSuccess, onFailure) {
    await this.configure()
    try {
      const offerings = await Purchases.getOfferings()
      // console.log({ offerings })
      if (
        offerings.current !== null &&
        offerings.current.availablePackages.length !== 0
      ) {
        onSuccess(offerings.current.availablePackages)
      }
    } catch (e) {
      onFailure(e, 'ERRR')
    }
  }

  async restorePurchases() {
    try {
      await Purchases.restorePurchases()
    } catch (e) {
      showMessage({
        message: e.message,
        description: 'Failed restoring purchases',
        type: 'danger',
      })
    }
  }

  async makeSubscription({ purchasePackage, back, dispatch }) {
    try {
      const { customerInfo } = await Purchases.purchasePackage(purchasePackage)
      if (
        typeof customerInfo.entitlements.active['Pro Access'] !== 'undefined'
      ) {
        dispatch(setTierToPro())
        back()
      }
    } catch (e) {
      if (!e.userCancelled) {
        showMessage({
          message: e.message,
          description: 'Failed purchasing package',
          type: 'danger',
        })
      }
    } finally {
      // setIsPurchasing(false)
    }
  }

  async checkSubscription() {
    const customerInfo = await Purchases.getCustomerInfo()
    console.log({ customerInfo })
    return customerInfo
  }

  async isSubscribed() {
    try {
      const customerInfo = await Purchases.getCustomerInfo()

      if (
        typeof customerInfo.entitlements.active['Pro Access'] !== 'undefined'
      ) {
        return true
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  }
}

export default new RNPurchases()
