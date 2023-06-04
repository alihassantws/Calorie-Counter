import { StyledView } from 'app/design/layout'
import { ViewProps } from 'react-native'

interface RadioButtonProps extends ViewProps {
  isActive: boolean
}

export default function RadioButton(props: RadioButtonProps) {
  const { style, isActive } = props
  return (
    <StyledView
      style={[
        {
          width: 26,
          height: 26,
          borderWidth: 1,
          borderRadius: 100,
          borderColor: isActive ? '#27AE60' : 'rgba(0, 0, 0, 0.12)',
          padding: 4,
        },
        style,
      ]}
    >
      <StyledView
        style={{
          backgroundColor: isActive ? '#27AE60' : 'transparent',
          width: '100%',
          height: '100%',
          borderRadius: 100,
        }}
      />
    </StyledView>
  )
}
