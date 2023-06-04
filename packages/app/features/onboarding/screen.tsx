import { StyledImage, StyledView } from 'app/design/layout'
import { Container } from 'app/design/layout'
import Slider from 'app/components/slider'
import { Book, CookingPerson } from 'app/assets/svgs'
import { Dimensions } from 'react-native'

function SaladImage() {
  return (
    <StyledImage
      source={require('../../assets/Salad.png')}
      style={{
        height: 340,
        width: Dimensions.get('window').width / 0.8,
        // backgroundColor: '#000',
      }}
      resizeMode={'contain'}
    />
  )
}

const sliderData = [
  {
    SvgImage: SaladImage,
    title: 'Scan Any Recipe',
    description: 'Start getting recipe details by simple capturing the recipes',
  },
  {
    SvgImage: CookingPerson,

    title: 'Get Recipe Details',
    description:
      'Capture any recipe to get all the necessary details to make this recipe at your home',
  },
  {
    SvgImage: Book,
    title: 'Start Cooking',
    description: 'Start cooking with easy steps with your scanned recipes',
  },
]

export function OnBoarding() {
  return (
    <Container style={{ backgroundColor: '#fff' }} tw="pr-0 pl-0">
      <StyledView
        style={{
          position: 'absolute',
          width: '100%',
          height: '40%',
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,
        }}
        tw="rounded-b bg-primary"
      />
      <Slider slides={sliderData} />
    </Container>
  )
}
