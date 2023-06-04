import Svg, { Path } from 'react-native-svg'
import React from 'react'

export default function Cross() {
  return (
    <Svg width="21" height="20" viewBox="0 0 21 20" fill="none">
      <Path
        d="M2.39355 2.29199L18.6386 18.537"
        stroke="black"
        stroke-width="2.90089"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.39355 18.537L18.6386 2.29199"
        stroke="black"
        stroke-width="2.90089"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}
