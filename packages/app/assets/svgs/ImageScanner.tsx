import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function ({
  color,
  width,
  height,
}: {
  color: string
  width: number
  height: number
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 26 27" fill="none">
      <Path
        d="M.304 14.752v.174h25.392v-2.852H.304v2.678zm17.53 11.27v.174h5.411c1.369 0 2.45-1.215 2.45-2.679v-5.182h-2.852v5.008h-5.008v2.679zm-9.843.174h.174V23.343H3.157v-5.008H.304v5.182c0 1.464 1.082 2.679 2.45 2.679h5.237zM18.01.804h-.174V3.657h5.008v5.008H25.697V3.483c0-1.464-1.082-2.679-2.45-2.679h-5.237zM8.165.978V.804h-5.41C1.386.804.305 2.02.305 3.483v5.182h2.852V3.657h5.008V.978z"
        fill={color}
        stroke={color}
        strokeWidth={0.347826}
      />
    </Svg>
  )
}
