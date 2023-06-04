import { Container } from 'app/design/layout'
import { ViewProps } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function CustomSafeAreaView(props: ViewProps) {
  const { style } = props
  return (
    <Container
      style={[
        { backgroundColor: '#fff', paddingTop: getStatusBarHeight() },
        style,
      ]}
      {...props}
    >
      {props.children}
    </Container>
  )
}
