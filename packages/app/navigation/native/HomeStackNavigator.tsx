import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { OnBoarding } from 'app/features/onboarding/screen'
import Login from 'app/features/login/screen'
import Signup from 'app/features/signup/screen'

import SubScription from 'app/features/Subscription'
import { useAppSelector } from 'app/hooks/reduxHooks'
import { selectOboarding } from 'app/services/redux/reducers/onboardingSlice'

type HomeStackNavigatorParams = {
  onboarding: undefined
  login: undefined
  signup: undefined
  SubScription: undefined
}

const Stack = createNativeStackNavigator<HomeStackNavigatorParams>()

export type HomeStackNavigatorProps =
  NativeStackNavigationProp<HomeStackNavigatorParams>

export function HomeStackNavigator() {
  const visited = useAppSelector(selectOboarding)
console.log(visited, "VISITED")
  const renderOnboarding = !visited  ? (
    <Stack.Screen
      name="onboarding"
      component={OnBoarding}
      options={{
        headerShown: false,
      }}
    />
  ) : undefined
  return (
    <Stack.Navigator>
      {renderOnboarding}
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
          headerShown: 'false',
        }}
      >
        <Stack.Screen name="SubScription" component={SubScription} />
      </Stack.Group>
      {/* <Stack.Screen
        name="SubScription"
        component={SubScription}
        options={{
          headerShown: false,
          presentation: 'fullScreenModal',
        }}
      /> */}
    </Stack.Navigator>
  )
}
