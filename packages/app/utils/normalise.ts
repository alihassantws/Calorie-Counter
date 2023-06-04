import { Platform, PixelRatio, useWindowDimensions } from 'react-native'

export default function normalize(size: number) {
  const { width } = useWindowDimensions()
  const scale = width / 320

  const newSize = size * scale
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}
