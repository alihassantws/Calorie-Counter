import * as React from 'react'
import Svg, {
  Rect,
  G,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export default function AppIcon(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={48} height={48} rx={12.4383} fill="#27AE60" />
      <G filter="url(#filter0_d_1_3277)">
        <Path
          d="M34.377 38.578A17.444 17.444 0 0041 29.557a17.077 17.077 0 00-.292-11.106 17.498 17.498 0 00-7.09-8.677 18.1 18.1 0 00-11.004-2.718l.27 3.425c3.11-.236 6.213.53 8.836 2.183a14.048 14.048 0 015.691 6.965 13.71 13.71 0 01.235 8.917 14.005 14.005 0 01-5.318 7.243l2.048 2.79z"
          fill="url(#paint0_linear_1_3277)"
          shapeRendering="crispEdges"
        />
      </G>
      <G filter="url(#filter1_d_1_3277)">
        <Path
          d="M26.886 40.994a18.052 18.052 0 01-13.093-2.92C9.983 35.46 7.366 31.484 6.5 27a17.237 17.237 0 012.656-12.93c2.57-3.804 6.551-6.47 11.095-7.428l.725 3.317c-3.662.773-6.871 2.921-8.942 5.987a13.893 13.893 0 00-2.141 10.421c.698 3.615 2.808 6.818 5.878 8.926a14.55 14.55 0 0010.553 2.353l.562 3.348z"
          fill="url(#paint1_linear_1_3277)"
          shapeRendering="crispEdges"
        />
      </G>
      <G filter="url(#filter2_d_1_3277)">
        <Path
          d="M23.775 6.82l.464 4.05c-.232 1.722-2.242 1.992-3.131 2.026h-10.09c0-1.54.928-1.857 1.392-1.823h6.03c.232 0 .696-.121.696-.607s-.464-.608-.695-.608H11.83c-.27-.034-.812-.263-.812-.911s.541-.878.812-.911h6.61c.232-.034.696-.203.696-.608 0-.405-.464-.574-.695-.607H12.41c-1.207 0-1.43-1.215-1.392-1.823h10.09c1.484 0 2.397 1.215 2.667 1.823z"
          fill="#fff"
        />
      </G>
      <G filter="url(#filter3_d_1_3277)">
        <Path
          d="M30.357 35.586c-3.52 0-5.712 1.4-6.369 2.1l.695 3.652c.386.548 2.061 1.644 5.674 1.644 4.517 0 7.296-2.1 7.296-3.653 0-1.552-2.895-3.743-7.296-3.743z"
          fill="#fff"
        />
      </G>
      <Circle cx={23.8945} cy={24.5227} r={8.86915} fill="#fff" />
      <Circle cx={23.8946} cy={24.5225} r={7.63507} fill="#27AD60" />
      <Circle cx={23.8946} cy={24.5227} r={3.9766} fill="#0B8F43" />
      <Circle cx={23.8945} cy={24.5227} r={2.06783} fill="#222" />
      <Circle cx={26.7577} cy={21.9777} r={0.79532} fill="#fff" />
      <Defs>
        <LinearGradient
          id="paint0_linear_1_3277"
          x1={20.2894}
          y1={41.8534}
          x2={15.0759}
          y2={14.3168}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.544611} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_3277"
          x1={27.6874}
          y1={41.2269}
          x2={32.9371}
          y2={13.5981}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.544611} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
