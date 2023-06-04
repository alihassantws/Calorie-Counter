import {
  View,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { styled } from 'nativewind'

export const StyledView = styled(View)
export const StyledImage = styled(Image)
export const StyledFlatlist = styled(FlatList)
export const StyledPressable = styled(Pressable)
export const StyledScrollView = styled(ScrollView)
export const StyledImageBackground = styled(ImageBackground)
export const StyledTouchableOpacity = styled(TouchableOpacity)
export const StyledTextInput = styled(TextInput)

export const Row = styled(View, 'flex-row')
export const Container = styled(View, 'container flex-1 px-8 py-5 bg-white')
