import { Row, StyledImage, StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { ChevronDown, ChevronRight } from 'react-native-feather'

type RecipeItemProps = {
  recipe: string
  calories: number
  description: string
  arrowRight?: boolean
}

export default function RecipeItem({
  recipe,
  calories,
  description,
  arrowRight = false,
}: RecipeItemProps) {
  return (
    <Row
      style={{
        padding: 8,
        backgroundColor: '#F1F5F5',
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <StyledImage
        source={require('../assets/SpicyRamen.png')}
        style={{ width: 50, aspectRatio: 1, borderRadius: 100 }}
      />
      <StyledView
        style={{
          flexGrow: 1,
          marginLeft: 14,
          justifyContent: 'space-between',
        }}
      >
        <Text tw="mb-2 font-semibold text-lg">{recipe}</Text>
        <Row>
          <Text style={{ color: 'rgba(0,0,0,0.5)' }}>
            {calories} Calories {' - '}
          </Text>
          <Text style={{ color: 'rgba(0,0,0,0.5)' }}>{description}</Text>
        </Row>
      </StyledView>
      {arrowRight ? (
        <ChevronRight color="#333" />
      ) : (
        <ChevronDown color="#333" />
      )}
    </Row>
  )
}
