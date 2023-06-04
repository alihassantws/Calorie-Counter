import { AppIcon } from 'app/assets/svgs'
import Button from 'app/components/button/button'
import MyTextInput from 'app/components/TextInput'
import { ScrollView, StyleSheet } from 'react-native'
import {
  Row,
  StyledImage,
  StyledTouchableOpacity,
  StyledView,
} from 'app/design/layout'
import { Text, H1 } from 'app/design/typography'
import { createRef, useCallback, useLayoutEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'
import { StackNavigationState, useNavigation } from '@react-navigation/native'
import { HomeStackNavigatorProps } from 'app/navigation/native'
import { registerWithEmail } from 'app/services/firebase/Authentication'
import SubImage from 'app/assets/svgs/Sub-Image'
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'
import Cross from 'app/assets/svgs/Cross'
import Tick from 'app/assets/svgs/Tick'
import React from 'react'
import { SubscriptionStyles } from './styles'
import Next from 'app/assets/svgs/Next'
import { next } from 'app/assets'

import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks'
import {
  clearOffers,
  selectSubscription,
  setOffers,
} from 'app/services/redux/reducers/subscriptionSlice'
import { useRouter } from 'solito/router'
import RNPurchases from 'app/services/purchases/RNPurchases'
import { useSafeArea } from 'app/provider/safe-area/use-safe-area.web'
import {
  selectOboarding,
  setOnboardingVisit,
} from 'app/services/redux/reducers/onboardingSlice'

export default function SubScription({ navigation }: any) {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  // const { offers } = useAppSelector(selectSubscription)
  const [offersLoading, setOffersLoading] = useState(true)
  const { navigate } = useNavigation<HomeStackNavigatorProps>()
  const onOfferFetch = useCallback(
    (offers) => {
      console.log(offers, 'OFFFF')
      setOffersLoading(false)
      dispatch(setOffers(offers))
    },
    [dispatch]
  )
  useLayoutEffect(() => {
    RNPurchases.fetchOffering(onOfferFetch, (e) => {
      console.log(e, 'ERRR')
    })
    return () => dispatch(clearOffers())
  }, [dispatch, onOfferFetch])

  const subData = [
    {
      SvgImage: Tick,
      title: 'Unlimited Recipe',
    },
    {
      SvgImage: Tick,
      title: 'Unlimited Scanning',
    },
    {
      SvgImage: Tick,
      title: 'Water Reminder',
    },
    {
      SvgImage: Tick,
      title: 'No Ads',
    },
  ]
  const insets = useSafeArea()
  const { replace } = useRouter()

  const visited = useAppSelector(selectOboarding)
  return (
    <ScrollView>
      <StyledView style={{ flex: 1 }}>
        <SubImage />
        <StyledTouchableOpacity
          tw="mt-10"
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            height: 40,
            width: 40,
            borderRadius: 20,
            //   left: 1,
            right: 20,
            // top: insets.top,
            // marginTop: ,
            alignItems: 'center',
            //   zIndex: 2,
            flexDirection: 'row',
            marginBottom: 20,
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.goBack(null), navigate('login')
            dispatch(setOnboardingVisit(true))
          }}
        >
          <Cross />
        </StyledTouchableOpacity>
        {/* <StyledImage
        source={require('../../assets/GreenLightGradient.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      /> */}
        <StyledView tw="px-6">
          <StyledView
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              flexDirection: 'row',
            }}
          >
            <H1>Get Registered</H1>
            <H1 style={{ color: '#27AE60' }}> PRO</H1>
          </StyledView>
          <StyledView
            style={{
              justifyContent: 'center',
              //   paddingHorizontal: 20,
              //   alignItems: 'center',

              //   flexDirection: 'row',
            }}
          >
            {React.Children.toArray(
              subData.map((feat, index) => (
                <Row tw={SubscriptionStyles.feats_row} key={index.toString()}>
                  <Tick />
                  <Text tw={SubscriptionStyles.feats_text}>{feat.title}</Text>
                </Row>
              ))
            )}
          </StyledView>
          <StyledView
            tw="mt-5"
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#27AE60',
              borderRadius: 20,
              borderWidth: 2,
              padding: 10,

              flexDirection: 'row',
            }}
          >
            <Tick height={32} width={32} />
            <StyledView tw="px-6 ">
              {/* <H1>Get Registered</H1> */}
              <Text tw={SubscriptionStyles.offers_title}>{'$4.99/Week'}</Text>
              <Text
                tw={SubscriptionStyles.offers_default}
                style={{ color: '#646464' }}
              >
                {'3 days Free Trial, Auto-renewable'}
              </Text>
              {/* <H1 style={{ color: '#27AE60' }}> PRO</H1> */}
            </StyledView>
          </StyledView>
          <StyledView
            tw="mt-5"
            style={{
              // justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#27AE60',
              borderRadius: 20,
              //   borderWidth: 2,
              padding: 10,

              flexDirection: 'row',
            }}
          >
            <Tick height={32} width={32} />
            <StyledView tw="px-6  ">
              {/* <H1>Get Registered</H1> */}
              <Text tw={SubscriptionStyles.offers_title}>
                {'$39.99, Lifetime'}
              </Text>
              <Text
                tw={SubscriptionStyles.offers_default}
                style={{ color: '#A4A4A4' }}
              >
                {'Billed Once'}
              </Text>
              {/* <H1 style={{ color: '#27AE60' }}> PRO</H1> */}
            </StyledView>
          </StyledView>
          <Button
            // style={{ justifyContent: 'space-between' }}
            // onPress={() => SignUpWithFirebase()}
            tw="mt-8 w-100 px-10"
          >
            Start free trial
            <StyledView
              //   tw="ml-25"
              style={{
                // justifyContent: 'flex-end',
                alignItems: 'flex-end',
                // left: 20,
                // right: 180,
                // left: 50,
                // position: 'absolute',
                // width: 20,
                // marginLeft: 10,
                // backgroundColor: '#000',
              }}
            >
              {/* <Next /> */}
              <StyledImage
                source={next}
                style={{
                  height: 35,
                  width: 30,
                  //   marginHorizontal: 30,
                  //   alignSelf: 'flex-end',
                  left: 70,
                }}
                resizeMode={'contain'}
              />
            </StyledView>
          </Button>
          {/* <Tick height={32} width={32} /> */}
          <StyledView
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <StyledTouchableOpacity>
              <Text
                tw={SubscriptionStyles.offers_title}
                style={{ textDecorationLine: 'underline', color: '#4B5762' }}
              >
                Privacy & Terms
              </Text>
            </StyledTouchableOpacity>
            <Text
              tw={SubscriptionStyles.offers_title}
              style={{ color: '#4B5762' }}
            >
              Restore
            </Text>
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  )
}
