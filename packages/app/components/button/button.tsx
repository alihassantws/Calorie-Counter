import { StyledTouchableOpacity, StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  children: string
  Icon?: React.ComponentType
}

export default function Button(props: ButtonProps) {
  const { Icon } = props
  return (
    <StyledTouchableOpacity
      tw="flex-row align-center justify-center px-10 bg-primary py-4 rounded-full"
      {...props}
    >
      <Text tw="text-xl font-medium" style={{ color: '#fff' }}>
        {props.children}
      </Text>
      <StyledView
        style={{
          position: 'absolute',
          bottom: '74%',
          alignSelf: 'center',
          right: '15%',
        }}
      >
        {Icon && <Icon />}
      </StyledView>
    </StyledTouchableOpacity>
  )
}
