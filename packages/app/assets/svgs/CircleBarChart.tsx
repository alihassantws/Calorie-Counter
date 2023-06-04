import * as React from 'react'
import Svg, { Rect } from 'react-native-svg'

export default function ({ color }: { color: string }) {
  return (
    <Svg width={33} height={33} viewBox="0 0 33 33" fill="none">
      <Rect
        x={1.12341}
        y={1.5}
        width={30}
        height={30}
        rx={7.41598}
        stroke={color}
        strokeWidth={2}
      />
      <Rect
        x={8.73877}
        y={11.5769}
        width={2.46154}
        height={12.3077}
        rx={1.23077}
        fill={color}
      />
      <Rect
        x={21.047}
        y={17.3762}
        width={2.46154}
        height={6.50661}
        rx={1.23077}
        transform="rotate(.078 21.047 17.376)"
        fill={color}
      />
      <Rect
        x={14.9132}
        y={8.74316}
        width={2.46154}
        height={15.1399}
        rx={1.23077}
        transform="rotate(.078 14.913 8.743)"
        fill={color}
      />
    </Svg>
  )
}
