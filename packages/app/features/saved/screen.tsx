import RecipeItem from 'app/components/RecipeItem'
import { StyledScrollView, StyledView } from 'app/design/layout'

export default function Saved() {
  return (
    <StyledScrollView
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <StyledView style={{ paddingBottom: 20 }}>
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
          arrowRight={true}
        />
      </StyledView>
    </StyledScrollView>
  )
}
