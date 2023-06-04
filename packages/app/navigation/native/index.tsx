import { useAppSelector } from 'app/hooks/reduxHooks'
import { selectAuth } from 'app/services/redux/reducers/authSlice'
import { HomeStackNavigator } from './HomeStackNavigator'
import MainStackNavigator from './MainStackNavigator'

export function NativeNavigation() {
  const isAuthenticated = useAppSelector(selectAuth)

  console.log(isAuthenticated, 'AUTH--->')

  if (isAuthenticated) return <MainStackNavigator />
  else return <HomeStackNavigator />
}
