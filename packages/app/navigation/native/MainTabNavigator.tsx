import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CircleBarChart from 'app/assets/svgs/CircleBarChart'
import ImageScanner from 'app/assets/svgs/ImageScanner'
import { StyledView } from 'app/design/layout'
import Activity from 'app/features/activity/screen'
import { HomeScreen } from 'app/features/home/screen'
import ImageCapture from 'app/features/image-capture/screen'
import Saved from 'app/features/saved/screen'
import Settings from 'app/features/settings/screen'
import { Home, Bookmark, Settings as SettingsIcon } from 'react-native-feather'

const Tab = createBottomTabNavigator()

export default function MainTabNavigation() {
  const primaryColor = '#27AE60'
  const inActiveColor = '#AEC7C7'
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderWidth: 0,
          // height: 70,

          // backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0.1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius: 25,
          // overflow: 'hidden',
        },
      }}
      defaultScreenOptions={{
        // tabBarActiveTintColor: primaryColor,
        // tabBarInactiveTintColor: inActiveColor,

        tabBarStyle: {
          // backgroundColor: '#fff',
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,
        },
      }}
      initialRouteName="settings"
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <StyledView style={{ paddingTop: 8 }}>
              <Home
                color={focused ? primaryColor : inActiveColor}
                width={30}
                height={30}
              />
            </StyledView>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="activity"
        component={Activity}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <StyledView style={{ paddingTop: 8 }}>
              <CircleBarChart color={focused ? primaryColor : inActiveColor} />
            </StyledView>
          ),
          headerShadowVisible: false,
          headerTitle: 'Activity',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="image-capture"
        component={ImageCapture}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <StyledView
              style={{
                position: 'absolute',
                bottom: 5,
                borderRadius: 100,
                backgroundColor: primaryColor,
                width: 70,
                height: 70,

                justifyContent: 'center',
                alignItems: 'center',
                // borderBottomColor: '#D3D3D3',
                // shadowColor: 'rgba(255, 255, 255, 0.9);',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                // borderBottomWidth: 2,
                // borderEndWidth: 2,
                // borderTopWidth: 0,
                borderColor: 'rgba(255, 255, 255, 0.89);',
                borderWidth: 5,
                // borderTopColor: 'white',
                borderRightWidth: 4,
                borderLeftWidth: 4,
                borderBottomWidth: 4,
              }}
            >
              <ImageScanner color="#fff" width={20} height={20} />
            </StyledView>
          ),
        }}
      />
      <Tab.Screen
        name="saved"
        component={Saved}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <StyledView style={{ paddingTop: 8 }}>
              <Bookmark
                color={focused ? primaryColor : inActiveColor}
                width={30}
                height={30}
              />
            </StyledView>
          ),
          headerShadowVisible: false,
          headerTitle: 'Saved Recipes',
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => (
            <StyledView style={{ paddingTop: 8 }}>
              <SettingsIcon
                color={focused ? primaryColor : inActiveColor}
                width={30}
                height={30}
              />
            </StyledView>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}
