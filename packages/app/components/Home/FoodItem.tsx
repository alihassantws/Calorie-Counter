import {
  Row,
  StyledImageBackground,
  StyledTouchableOpacity,
  StyledView,
} from 'app/design/layout'
import { Text } from 'app/design/typography'
import { Bookmark } from 'react-native-feather'

type FoodItemProps = {
  height: number
}

export default function FoodItem({ height }: FoodItemProps) {
  return (
    <StyledTouchableOpacity
      style={{ height, borderRadius: 14, overflow: 'hidden' }}
    >
      <StyledImageBackground
        source={require('../../assets/SpicyRamen.png')}
        style={{
          height,
          aspectRatio: 1,
          paddingHorizontal: 12,
          paddingBottom: 8,
          justifyContent: 'flex-end',
          marginRight: 16,
          borderRadius: 14,
          overflow: 'hidden',
        }}
      >
        <StyledView
          style={{
            backgroundColor: 'rgba(110, 150, 127, 0.6)',
            borderRadius: 6,
          }}
          tw="p-3"
        >
          <Text style={{ color: '#fff' }} tw="font-bold text-md">
            Spicy Ramen with mix sea food
          </Text>
          <Row tw="justify-between mt-4">
            <Row>
              <Text style={{ color: '#fff' }} tw="text-md">
                341 Calories -
              </Text>
              <Text style={{ color: '#fff' }} tw="text-md">
                {' '}
                32 min
              </Text>
            </Row>
            <StyledTouchableOpacity>
              <Bookmark color="#fff" fill="transparent" />
            </StyledTouchableOpacity>
          </Row>
        </StyledView>
      </StyledImageBackground>
    </StyledTouchableOpacity>
  )
}
