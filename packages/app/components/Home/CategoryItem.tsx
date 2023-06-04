import { StyledTouchableOpacity } from 'app/design/layout'
import { Text } from 'app/design/typography'

type CategoryItemProps = {
  title: string
  handleOnPress: () => void
  isActive: boolean
}

export default function CategoryItem({
  title,
  handleOnPress,
  isActive,
}: CategoryItemProps) {
  return (
    <StyledTouchableOpacity
      style={{
        borderRadius: 8,
        padding: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isActive ? '#27AE60' : '#F1F5F5',
        width: 120,
        marginRight: 15,
      }}
      onPress={handleOnPress}
    >
      <Text
        style={{ color: isActive ? '#fff' : '#0F2A38' }}
        tw="font-bold text-xl"
      >
        {title}
      </Text>
    </StyledTouchableOpacity>
  )
}
