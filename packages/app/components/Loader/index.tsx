import { StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { Modal, Platform, ActivityIndicator } from 'react-native'

export const Loader = ({
  visible,
  message = 'Please be patient while the image is being generated.',
}) => (
  <Modal
    visible={visible}
    // onRequestClose={close}
    // presentationStyle='fullScreen'
    animationType="fade"
    transparent={Platform.OS != 'ios'}
  >
    <StyledView tw="bg-violet-200/20 flex-1 items-center justify-center px-4">
      <StyledView tw="bg-white rounded-2xl w-72 items-center justify-center py-9 shadow-lg">
        <ActivityIndicator size={'large'} color="#27AE60" />

        <Text
          tw="text-base font-regular mt-4 w-56 text-center"
          style={{ fontFamily: 'Inter-SemiBold' }}
        >
          {message}
        </Text>
      </StyledView>
    </StyledView>
  </Modal>
)
