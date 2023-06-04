import { StyledView, StyledTextInput } from 'app/design/layout'
import { Fonts } from 'app/utils/helpers/Fonts'
import { useState } from 'react'
import { TextInputProps, ViewStyle , StyleSheet} from 'react-native'
import { Eye, EyeOff } from 'react-native-feather'

interface MytextInputProps extends TextInputProps {
  viewStyle?: ViewStyle
  margintop?:number
}

export default function MyTextInput(props: MytextInputProps) {
  const [focus, setFocus] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const { viewStyle, textContentType } = props
  const showPassword = passwordVisible || textContentType != 'password'
  const isPasswordField = textContentType == 'password'

  function EyeIcon() {
    if (showPassword)
      return <Eye color="black" onPress={() => setPasswordVisible(false)} />
    return <EyeOff color="black" onPress={() => setPasswordVisible(true)} />
  }

  // Styles applied when text input is focused
  const focusStyles = {
    borderColor: '#27AE60',
    borderWidth: 1.5,
    borderBottomWidth: 1.5,
    borderRadius: 8,
    // marginTop: 12,
  }
  const nonfocusStyles = {
    borderColor: '#000',
    // marginTop: 12,
    // borderWidth: 1.5,
    borderBottomWidth: focus ? 1.5:StyleSheet.hairlineWidth,
    borderRadius: 8,
  }
  return (
    <StyledView
      style={[
        {
          backgroundColor: 'transparent',
          padding: 12,
          borderBottomColor: focus ? '#27AE60' : '#000',
          borderBottomWidth: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: props.margintop
        },
        focus ? focusStyles : nonfocusStyles,
        viewStyle,
      ]}
    >
      <StyledTextInput
      //  placeholderStyle={{}}
      
        placeholderTextColor="#000"
        style={{ backgroundColor: 'transparent', fontSize: 18,fontWeight:'400', fontFamily:Fonts.Regular, flex: 1 }}
        {...props}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        secureTextEntry={!showPassword}
        
      />
      {isPasswordField ? <EyeIcon /> : null}
    </StyledView>
  )
}
