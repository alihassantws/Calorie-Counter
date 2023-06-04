import { Text } from 'app/design/typography'
import {
  Row,
  StyledImage,
  StyledScrollView,
  StyledView,
} from 'app/design/layout'

import Greetings from 'app/components/Greetings'
import ReminderItem from 'app/components/Home/ReminderItem'
import { ConsumptionCharacter } from 'app/assets/svgs'
import WaterCharacter from 'app/assets/svgs/WaterCharacter'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import CategoryItem from 'app/components/Home/CategoryItem'
import FoodItem from 'app/components/Home/FoodItem'
import { TouchableOpacity, useWindowDimensions } from 'react-native'
import { useState } from 'react'
import { useAppDispatch } from 'app/hooks/reduxHooks'
import { resetUser, setAuthentication } from 'app/services/redux/reducers/authSlice'

export function HomeScreen() {
  const { height } = useWindowDimensions()
  const secitons = ['Popular', 'Noodles', 'Dessert']
  const [activeSection, setActiveSection] = useState('Popular')
  const dispatch = useAppDispatch()
  return (
    <StyledView
      style={{ paddingHorizontal: 0, paddingTop: getStatusBarHeight() }}
    >
      <Row tw="justify-between" style={{ paddingHorizontal: 20 }}>
        <StyledView>
          <Greetings />
          <Text tw="mt-2 text-lg font-bold">John Smith</Text>
        </StyledView>
        <TouchableOpacity
          onPress={() => dispatch(resetUser())}
          
          style={{
            width: 40,
            height: 40,

            borderRadius: 200,

          }}
        >
          <StyledImage
            source={require('../../assets/Salad.png')}
            resizeMode={'contain'}
            style={{
              width: 40,
              height: 40,
              // aspectRatio: 1,
              borderRadius: 200,
              // overflow: 'hidden',
            }}
          />
        </TouchableOpacity>
      </Row>
      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 30,
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      >
        <ReminderItem
          title="Daily Consumption"
          backgroundColor="#27AE60"
          subTitleOne="11g"
          subTieleOneDescription="Protein"
          subTitleTwo="2112 kcal"
          subTitleTwoDescription="Calories"
          SvgComponent={<ConsumptionCharacter />}
          height={height * 0.22}
        />
        <ReminderItem
          title="Water Reminder"
          backgroundColor="#00B2FF"
          subTitleOne="8 Cups"
          subTieleOneDescription="Water"
          subTitleTwo="88%"
          subTitleTwoDescription="Completed"
          SvgComponent={<WaterCharacter />}
          height={height * 0.22}
        />
      </StyledScrollView>
      <StyledView style={{ paddingHorizontal: 20 }}>
        <Text style={{ color: '#082432' }} tw="text-xl font-bold">
          Category
        </Text>
        <StyledScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginBottom: 30,
            marginTop: 10,
          }}
        >
          {secitons.map((item, index) => (
            <CategoryItem
              key={index}
              title={item}
              isActive={item === activeSection}
              handleOnPress={() => setActiveSection(item)}
            />
          ))}
        </StyledScrollView>
        <Text style={{ color: '#082432' }} tw="text-xl font-bold">
          {activeSection}
        </Text>
      </StyledView>
      <StyledScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginBottom: 30,
          marginTop: 10,
          paddingHorizontal: 20,
        }}
      >
        <FoodItem height={height * 0.28} />
        <FoodItem height={height * 0.28} />
        <FoodItem height={height * 0.28} />
      </StyledScrollView>
    </StyledView>
  )
}
