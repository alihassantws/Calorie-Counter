// import BackIcon from 'app/assets/back-icon'
// import HeaderRight from 'app/components/HeaderRight'
import { StyledPressable } from 'app/design/layout'
// import { TabStyles } from 'app/design/styles/tabStyles'
import { createRef } from 'react'
export const navigatioRef = createRef()

// export const setBackButton = ({
//   navigation,
//   onPressBack,
// }: {
//   onPressBack?: any
//   navigation: any
// }) => {
//   const onPress = onPressBack ? onPressBack : navigation.goBack
//   navigation.setOptions({
//     headerLeft: () => (
//       <StyledPressable onPress={onPress} tw={'ml-6'}>
//         <BackIcon />
//       </StyledPressable>
//     ),
//   })
// }
// export const setTitle = ({ navigation, title = '' }) => {
//   navigation.setOptions({
//     title,
//   })
// }

// export const toggleBottomTab = ({ navigation, isVisible }) => {
//   const TabNav = navigation.getParent()
//   TabNav.setOptions({
//     tabBarStyle: isVisible ? TabStyles.tabBarStyle : { display: 'none' },
//   })
// }

// export const setHeaderRight = ({ navigation, ...rest }) => {
//   navigation.setOptions({
//     headerRight: () => <HeaderRight {...rest} />,
//   })
// }
