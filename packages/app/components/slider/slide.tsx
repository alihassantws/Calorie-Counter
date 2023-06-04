import { StyledView } from 'app/design/layout'
import { H1, Text } from 'app/design/typography'

import normalize from 'app/utils/normalise'
import { useWindowDimensions } from 'react-native'

type SlideProps = {
  title: string
  description: string
  slideWidth: number
  SvgImage: any
}

export function Slide({
  title,
  description,
  slideWidth,
  SvgImage,
}: SlideProps) {
  const { width, height } = useWindowDimensions()

  return (
    <StyledView
      style={{
        width: slideWidth,
        marginTop: 10,
        alignItems: 'center',
        height: '100%',
        paddingBottom: 6,
        paddingHorizontal: 20,
        // marginVertical: 10,
      }}
    >
      <StyledView style={{ paddingTop: 20 }}>
        <SvgImage width={height * 0.45} height={height * 0.45} />
      </StyledView>
      <H1
        style={{
          marginTop: 30,
          marginBottom: 10,
          fontSize: normalize(26),
          fontWeight: '500',
        }}
      >
        {title}
      </H1>
      <Text
        style={{
          textAlign: 'center',
          fontSize: normalize(18),
          marginTop: 20,
          color: '#838383',
        }}
      >
        {description}
      </Text>
    </StyledView>
  )
}
