import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import MainTabNavigation from './MainTabNavigator'

type MainStackNavigatorParams = {
  tab: undefined
}

const Stack = createNativeStackNavigator<MainStackNavigatorParams>()

export type MainStackNavigatorProps =
  NativeStackNavigationProp<MainStackNavigatorParams>

export default function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tab"
        component={MainTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
