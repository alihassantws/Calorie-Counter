import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Dimensions, Image } from 'react-native'
import { H1, Text } from 'app/design/typography'
import { Slide } from './slide'
import { Row, StyledTouchableOpacity } from 'app/design/layout'
import { useNavigation } from '@react-navigation/native'
import { HomeStackNavigatorProps } from 'app/navigation/native/HomeStackNavigator'

let { width } = Dimensions.get('window')

export interface SlideDataProps {
  title: string
  description: string
  SvgImage: React.ComponentType
}

type SliderProps = {
  slides: SlideDataProps[]
}

export default function ({ slides }: SliderProps) {
  const [active, setActive] = useState(0)
  const [ref, setRef] = useState<ScrollView | null>()
  const { navigate } = useNavigation<HomeStackNavigatorProps>()
  const change = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      )
      if (slide !== active) {
        setActive(slide)
      }
    }
  }

  function handleNext() {
    if (active === 2) {
      navigate('SubScription')
    }
    if (ref) {
      ref.scrollTo({ x: width * (active + 1), animated: true })
    }
    setActive(active + 1)
  }

  const length = slides ? slides.length * width : 0

  return (
    <View tw="justify-between">
      <View style={{ height: '75%' }}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => change(event.nativeEvent)}
          scrollEventThrottle={16}
          contentContainerStyle={{
            width: length,
          }}
          ref={(ref) => setRef(ref)}
        >
          {slides.map((item, index) => (
            <Slide key={index} {...item} slideWidth={width} />
          ))}
        </ScrollView>
      </View>
      <Row style={styles.dotsContainer}>
        {slides?.map((e, index) => (
          <Text
            key={index}
            style={active == index ? styles.dotActive : styles.dot}
          >
            •
          </Text>
        ))}
      </Row>
      <Row tw="justify-between px-10">
        <StyledTouchableOpacity onPress={() => navigate('login')}>
          <H1 style={{ color: '#838383', fontSize: 28, fontWeight: '500' }}>
            Skip
          </H1>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={handleNext}>
          <H1 tw="color-primary " style={{ fontSize: 28, fontWeight: '500' }}>
            {active === 2 ? 'Get Started' : 'Next'}
          </H1>
        </StyledTouchableOpacity>
      </Row>
    </View>
  )
}

const styles = StyleSheet.create({
  dotsContainer: {
    alignSelf: 'center',
    marginTop: 40,
  },
  dot: {
    color: '#E1E8EF',
    fontSize: 54,
  },
  dotActive: {
    color: '#27AE60',
    fontSize: 54,
  },
})
