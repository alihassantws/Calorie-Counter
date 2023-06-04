import { ConsumptionCharacter } from 'app/assets/svgs'
import { Row, StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'

type ReminderItemProps = {
  backgroundColor: string
  title: string
  subTitleOne: string
  subTieleOneDescription: string
  subTitleTwo: string
  subTitleTwoDescription: string
  SvgComponent: React.ReactNode
  height: number
}

export default function ReminderItem({
  backgroundColor,
  title,
  subTitleOne,
  subTieleOneDescription,
  subTitleTwo,
  subTitleTwoDescription,
  SvgComponent,
  height,
}: ReminderItemProps) {
  return (
    <StyledView
      style={{
        borderRadius: 30,
        padding: 15,
        paddingRight: 0,
        backgroundColor,
        marginRight: 20,
        height,
      }}
    >
      <Row>
        <StyledView style={{ marginRight: 8 }}>
          <Text style={{ color: '#fff' }} tw="text-2xl font-bold mt-4">
            {title}
          </Text>
          <Row tw="mt-10">
            <StyledView style={{ marginRight: 30 }}>
              <Text style={{ color: '#fff' }} tw="text-lg font-bold mt-2">
                {subTitleOne}
              </Text>
              <Text style={{ color: '#fff' }} tw="text-lg mt-1">
                {subTieleOneDescription}
              </Text>
            </StyledView>
            <StyledView>
              <Text style={{ color: '#fff' }} tw="text-lg font-bold mt-2">
                {subTitleTwo}
              </Text>
              <Text style={{ color: '#fff' }} tw="text-lg mt-1">
                {subTitleTwoDescription}
              </Text>
            </StyledView>
          </Row>
        </StyledView>
        {SvgComponent}
      </Row>
    </StyledView>
  )
}
