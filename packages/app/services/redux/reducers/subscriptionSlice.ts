import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PurchasesOffering } from 'react-native-purchases'

import type { RootState } from '../store'

export enum TIER {
  FREE = 'Free',
  PRO = 'Pro',
}
interface SubscriptionState {
  tier: string
  offers: any
}

const initialState: SubscriptionState = {
  tier: TIER.FREE,
  offers: [],
}

export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<PurchasesOffering[]>) => {
      state.offers = action.payload || []
    },
    clearOffers: (state) => {
      state.offers = []
    },
    setTierToPro: (state) => {
      state.tier = TIER.PRO
    },
    setTierToFree: (state) => {
      state.tier = TIER.PRO
    },
  },
})

export const { setTierToPro, setTierToFree, setOffers, clearOffers } =
  subscriptionSlice.actions

export const selectSubscription = (state: RootState) => state.subscription

export default subscriptionSlice.reducer
