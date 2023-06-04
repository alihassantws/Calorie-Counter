import { NavigationProvider } from './navigation'
import { SafeArea } from './safe-area'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'app/services/redux/store'
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SafeArea>
      <ReduxProvider store={store}>
        <NavigationProvider>{children}</NavigationProvider>
      </ReduxProvider>
    </SafeArea>
  )
}
