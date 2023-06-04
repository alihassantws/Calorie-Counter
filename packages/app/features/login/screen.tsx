import { AppIcon } from 'app/assets/svgs'
import Button from 'app/components/button/button'
import MyTextInput from 'app/components/TextInput'
import {
  StyledImage,
  StyledTouchableOpacity,
  StyledView,
} from 'app/design/layout'
import { Loader } from 'app/components/Loader'
import { Text, H1 } from 'app/design/typography'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigatorProps } from 'app/navigation/native'
import { StyleSheet } from 'react-native'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as AppleAuthentication from 'expo-apple-authentication'
import {
  LoginWithEmail,
  registerWithApple,
  registerWithGoogle,
} from 'app/services/firebase/Authentication'
import {
  selectAuthSlice,
  setAppleAuth,
  setGoogleAuth,
} from 'app/services/redux/reducers/authSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks'
import { AppleIcon, GoogleIcon } from 'app/assets/svgs/auth-icons'
WebBrowser.maybeCompleteAuthSession()
export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { navigate } = useNavigation<HomeStackNavigatorProps>()
  const dispatch = useAppDispatch()

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '284276820851-eeegakqcbo3ngdu7b9jcjd5lci24upge.apps.googleusercontent.com',
    iosClientId:
      '692200635279-3i9p7rb2l9lips1cjpe88klddmldn89u.apps.googleusercontent.com',
    androidClientId:
      '692200635279-20n5h34iqlg1edvq62e4gk2q1dg6t2um.apps.googleusercontent.com',
    // webClientId:
    //   '692200635279-20n5h34iqlg1edvq62e4gk2q1dg6t2um.apps.googleusercontent.com',
  })
  const user = useAppSelector(selectAuthSlice)
  console.log(user.isAuthenticated, 'USER')
  const [isloading, setIsLoading] = useState(false)
  // console.log(response?.type, response?.params?.id_token, 'RESSSSS--->')
  useEffect(() => {
    if (response?.type === 'success') {
      setIsLoading(true)
      const { id_token } = response.params
      registerWithGoogle(id_token, dispatch, setGoogleAuth, setIsLoading)
    }
  }, [response, dispatch])

  const [isAppleLoginAvailable, setIsAppleLoginAvailable] = useState(false)

  useEffect(() => {
    AppleAuthentication.isAvailableAsync().then(setIsAppleLoginAvailable)
  }, [])
  const AppleAuth = () => {
    console.log('Apple')
  }
  const GoogleAuth = () => {
    promptAsync()
  }

  const LOGIN = async () => {
    await LoginWithEmail(email, password)
  }
  let t = 1.5
  return (
    <StyledView style={{ flex: 1 }}>
      <StyledImage
        source={require('../../assets/GreenLightGradient.png')}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
      <StyledView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}
      >
        <AppIcon />
        <H1>Welcome!</H1>
        <Text style={{ fontSize: 22 }}>Log in to continue</Text>
      </StyledView>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <MyTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          margintop={ 12}
        />
        <MyTextInput
          placeholder="Password"
          textContentType="password"
          margintop={ 12}
          
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button onPress={() => LOGIN()} tw="mt-8 w-100">
          Login
        </Button>
        {isAppleLoginAvailable && (
          <Button
            onPress={async () => {
              try {
                const credential = await AppleAuthentication.signInAsync({
                  requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                  ],
                })
                console.log(credential, 'CRE')

                if (credential)
                  registerWithApple(
                    credential?.identityToken,
                    dispatch,
                    setAppleAuth,
                    setIsLoading
                  )
                // signed in
              } catch (e) {
                if ((e as any).code === 'ERR_CANCELED') {
                  setIsLoading(false)
                  // handle that the user canceled the sign-in flow
                } else {
                  setIsLoading(false)
                  // handle other errors
                }
              }
            }}
            style={{ backgroundColor: '#000' }}
            tw="mt-8 w-100"
          >
            <AppleIcon width={40} />
            Login with Apple
          </Button>
        )}
        <Button
          onPress={GoogleAuth}
          style={{ backgroundColor: '#017FFA' }}
          tw="mt-8 w-100 "
        >
          {/* <StyledView> */}
          <GoogleIcon width={40} />
          {/* </StyledView> */}
          Login with Google
        </Button>
      </KeyboardAwareScrollView>
      <StyledTouchableOpacity
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          justifyContent: 'center',
        }}
        onPress={() => navigate('signup')}
      >
        <Text tw="text-lg">Don't have an account?</Text>
        <Text tw="text-lg font-bold"> Signup now</Text>
      </StyledTouchableOpacity>
      <Loader visible={isloading} message={'Loading...'} />
    </StyledView>
  )
}
