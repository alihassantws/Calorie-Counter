import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import appsFlyer from 'react-native-appsflyer'
import { useFonts } from 'expo-font'
import { Platform } from 'react-native'
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency'

import { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
appsFlyer.initSdk(
  {
    devKey: 'DP25XUdZBwah9HbkYju7U',
    isDebug: true,
    appId: `id1637633436`,
    // onInstallConversionDataListener: true, //Optional
    // onDeepLinkListener: true, //Optional
    timeToWaitForATTUserAuthorization: 10, //for iOS 14.5
  },

  (result) => {
    console.log(result, 'APPSFLYER--->')
  },
  (error) => {
    console.error(error)
  }
)
// interface TextWithDefaultProps extends Text {
//   defaultProps?: { allowFontScaling?: boolean };
// }

// (Text as unknown as TextWithDefaultProps).defaultProps = {
//    ...((Text as unknown as TextWithDefaultProps).defaultProps || {}),
//    allowFontScaling: false,
//  };

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
  })
  useEffect(() => {
    const getTrackingPerm = async () => {
      console.log('getTrackingPerm')
      const { status } = await requestTrackingPermissionsAsync()
      if (status === 'granted') {
        // console.log('Yay! I have user permission to track data')
      }
    }


    setTimeout(() => {
      if (Platform.OS === 'ios') getTrackingPerm()
    }, 500)
  }, [])

  if (!fontsLoaded) {
    return null
  }
  return (
    <Provider>
      <GestureHandlerRootView style={{flex:1}}>
      <NativeNavigation />
      </GestureHandlerRootView>
    </Provider>
  )
}

// function requestTrackingPermissionsAsync(): { status: any } | PromiseLike<{ status: any }> {
//   throw new Error('Function not implemented.')
// }
// function useFonts(arg0: { 'Inter-Regular': any; 'Inter-Bold': any; 'Inter-Medium': any; 'Inter-SemiBold': any; 'Inter-Black': any }): [any] {
//   throw new Error('Function not implemented.')
// }
