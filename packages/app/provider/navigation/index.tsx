import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo, useRef } from 'react'
import * as Analytics from 'expo-firebase-analytics'
import React from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const routeNameRef = useRef()
  const navigationRef = useNavigationContainerRef()
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef.getCurrentRoute()?.name
        const trackScreenView = async (currentRouteName) => {
          await Analytics.logEvent('Route', { currentRouteName })
        }

        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName

          // Replace the line below to add the tracker from a mobile analytics SDK
          await trackScreenView(currentRouteName)
        }
      }}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
