import { AppIcon } from 'app/assets/svgs'
import Button from 'app/components/button/button'
import MyTextInput from 'app/components/TextInput'
import { StyleSheet } from 'react-native'
import {
  StyledImage,
  StyledTouchableOpacity,
  StyledView,
} from 'app/design/layout'
import { Text, H1 } from 'app/design/typography'
import { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigatorProps } from 'app/navigation/native'
import { registerWithEmail } from 'app/services/firebase/Authentication'

export default function Signup() {
  const [email, setEmail] = useState<string | any>('')
  const [password, setPassword] = useState<string | any>('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [isChecked, setChecked] = useState(false)
  const { navigate } = useNavigation<HomeStackNavigatorProps>()
  const SignUpWithFirebase = async () => {
    console.log('sign')
    if (email && password) {
      registerWithEmail({ email, password })
        .then((res) => {
          // console.log(res, 'jhjdh')
          if (res) navigate('login')
        })
        .catch((e) => console.log(e, 'EEE'))
    }

    // console.log(result, 'RESs')
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
        <H1>Get Registered</H1>
        <Text style={{ fontSize: 22 }}>Create a new account</Text>
      </StyledView>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <MyTextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          // viewStyle={{
          //   borderBottomWidth:t,
          // }}
        />
        <MyTextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          margintop={10}
         
        />
        <MyTextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          margintop={10}
         
        />
        <MyTextInput
          placeholder="Password"
          textContentType="password"
          margintop={12}
         
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <StyledView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            paddingLeft: 12,
          }}
        >
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#27AE60' : undefined}
            style={{ marginRight: 10 }}
          />
          <StyledTouchableOpacity>
            <Text style={{ textDecorationLine: 'underline' }}>
              I agree with terms & conditions
            </Text>
          </StyledTouchableOpacity>
        </StyledView>
        <Button onPress={() => SignUpWithFirebase()} tw="mt-8 w-100">
          Get Started
        </Button>
      </KeyboardAwareScrollView>
      <StyledTouchableOpacity
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          justifyContent: 'center',
        }}
        onPress={() => navigate('login')}
      >
        <Text tw="text-lg">Already have an account?</Text>
        <Text tw="text-lg font-bold"> Login now</Text>
      </StyledTouchableOpacity>
    </StyledView>
  )
}
