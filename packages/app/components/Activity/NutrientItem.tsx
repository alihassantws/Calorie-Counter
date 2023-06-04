import { StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'

type NutrientItemProps = {
  weight: number
  nutrient: string
  Icon: React.ReactNode
}

export default function NutrientItem({
  Icon,
  weight,
  nutrient,
}: NutrientItemProps) {
  return (
    <StyledView>
      <StyledView
        style={{
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.1)',
          alignItems: 'center',
          borderRadius: 18,
          height: 90,
        }}
        tw="px-5 py-3"
      >
        {Icon}
        <Text tw="mt-3 text-lg font-medium">{weight}g</Text>
      </StyledView>
      <Text tw="mt-2 text-center text-md">{nutrient}</Text>
    </StyledView>
  )
}
