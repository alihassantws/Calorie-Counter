import { Row } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { Sun, Sunset, Moon } from 'react-native-feather'

type GreetingItem = {
  message: string
  Icon: React.ReactNode
}

export default function Greetings() {
  function GreetingItem({ message, Icon }: GreetingItem) {
    return (
      <Row tw="flex-row align-center justify-center">
        {Icon}
        <Text style={{ color: '#2B424E', marginLeft: 6 }}>{message}</Text>
      </Row>
    )
  }

  function GreetingsMessage() {
    const day = new Date()
    const hr = day.getHours()

    if (hr >= 6 && hr < 12) {
      return (
        <GreetingItem
          message="Good Morning"
          Icon={<Sun color="#2B424E" width={17} height={17} />}
        />
      )
    } else if (hr == 12) {
      return (
        <GreetingItem
          message="Good Noon"
          Icon={<Sun color="#2B424E" width={17} height={17} />}
        />
      )
    } else if (hr >= 12 && hr <= 17) {
      return (
        <GreetingItem
          message="Good Afternoon"
          Icon={<Sunset color="#2B424E" width={17} height={17} />}
        />
      )
    } else {
      return (
        <GreetingItem
          message="Good Evening"
          Icon={<Moon color="#2B424E" width={17} height={17} />}
        />
      )
    }
  }

  return <GreetingsMessage />
}
