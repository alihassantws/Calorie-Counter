import NutrientItem from 'app/components/Activity/NutrientItem'
import { Container, Row, StyledScrollView, StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { useWindowDimensions } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { Blood, Leaves, Petals, Pizza } from 'app/assets/svgs'
import { useState } from 'react'
import DurationSelect from 'app/components/Activity/DurationSelect'
import RecipeItem from 'app/components/RecipeItem'

export default function Activity() {
  const { width } = useWindowDimensions()
  const [rangeSelect, setRangeSelect] = useState('Today')
  return (
    <StyledScrollView
      style={{ flex: 1, backgroundColor: '#fff' }}
      showsVerticalScrollIndicator={false}
    >
      <StyledView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AnimatedCircularProgress
          size={width * 0.65}
          width={20}
          fill={65}
          tintColor="#27AE60"
          backgroundColor="#F1F5F5"
          rotation={225}
          arcSweepAngle={270}
          children={() => (
            <StyledView>
              <Text style={{ fontWeight: '600' }} tw="text-xl text-center">
                1721 Kcal
              </Text>
              <Text tw="text-md text-center">of 3000</Text>
            </StyledView>
          )}
          lineCap={'round'}
        />
      </StyledView>
      <StyledView style={{ position: 'relative' }}>
        <Row style={{ position: 'absolute', top: -20 }}>
          <Text style={{ marginLeft: width * 0.26 }} tw="text-md">
            0 Kcal
          </Text>
          <Text style={{ marginLeft: width * 0.23, opacity: 0.5 }} tw="text-md">
            3000 Kcal
          </Text>
        </Row>
      </StyledView>
      <StyledView style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
        <StyledView
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          tw="mt-4"
        >
          <NutrientItem weight={12} nutrient="Carbs" Icon={<Leaves />} />
          <NutrientItem weight={12} nutrient="Protein" Icon={<Petals />} />
          <NutrientItem weight={12} nutrient="Calories" Icon={<Blood />} />
          <NutrientItem weight={12} nutrient="Fats" Icon={<Pizza />} />
        </StyledView>
        <Row tw="justify-between align-center mt-4">
          <Text tw="text-xl font-medium">Breakfast</Text>
          <DurationSelect
            value={rangeSelect}
            setValue={(val) => setRangeSelect(val)}
          />
        </Row>
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
        />
        <RecipeItem
          recipe="Sandwich"
          calories={120}
          description="21g Protein"
        />
      </StyledView>
    </StyledScrollView>
  )
}
