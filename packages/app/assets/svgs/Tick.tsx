import Svg, { Path } from 'react-native-svg'
import React from 'react'

export default function Tick({ width, height }) {
  return (
    <Svg
      width={width || 22}
      height={height || 23}
      viewBox="0 0 22 23"
      fill="none"
    >
      <Path
        d="M10.7013 0.798828C4.80086 0.798828 0 5.59968 0 11.5002C0 17.4007 4.80086 22.2015 10.7013 22.2015C16.6018 22.2015 21.4027 17.4007 21.4027 11.5002C21.4027 5.59968 16.6018 0.798828 10.7013 0.798828ZM16.6823 8.68403L9.8431 15.4696C9.44079 15.8719 8.7971 15.8987 8.36797 15.4964L4.74722 12.1975C4.31809 11.7952 4.29127 11.1247 4.66675 10.6956C5.06906 10.2664 5.73957 10.2396 6.1687 10.6419L9.03848 13.2703L15.1535 7.15527C15.5827 6.72614 16.2532 6.72614 16.6823 7.15527C17.1114 7.5844 17.1114 8.25491 16.6823 8.68403Z"
        fill="#27AE60"
      />
    </Svg>
  )
}
