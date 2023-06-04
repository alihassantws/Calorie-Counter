import { StyledTouchableOpacity, StyledView } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { ChevronDown } from 'react-native-feather'
import RadioButton from '../RadioButton'

type DurationSelectProps = {
  value: string
  setValue: (val: string) => void
}

export default function DurationSelect({
  value,
  setValue,
}: DurationSelectProps) {
  const [showMenu, setShowMenu] = useState(false)
  const { width } = useWindowDimensions()

  const styles = StyleSheet.create({
    menuTextRow: {
      width: width * 0.75,
      position: 'relative',
      padding: 10,
      borderBottomColor: 'rgba(0,0,0,0.15)',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })

  function handleValueSelect(val: string) {
    setValue(val)
    setShowMenu(false)
  }

  function Menu() {
    const isTodayActive = value.toLowerCase() === 'today'
    const isYesterdayActive = value.toLowerCase() === 'yesterday'
    const isWeeklyActive = value.toLowerCase() === 'weekly'
    const isMonthlyActive = value.toLowerCase() === 'monthly'
    return (
      <StyledView
        style={{
          position: 'absolute',
          width: width * 0.9,
          left: -50,
          zIndex: 100,
          backgroundColor: '#fff',
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <StyledTouchableOpacity
          style={styles.menuTextRow}
          onPress={() => handleValueSelect('Today')}
        >
          <Text
            style={{ color: isTodayActive ? '#000' : 'rgba(0,0,0,0.6)' }}
            tw="text-xl ml-4"
          >
            Today
          </Text>
          <RadioButton isActive={isTodayActive} />
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          style={styles.menuTextRow}
          onPress={() => handleValueSelect('Yesterday')}
        >
          <Text
            style={{ color: isYesterdayActive ? '#000' : 'rgba(0,0,0,0.6)' }}
            tw="text-xl ml-4"
          >
            Yesterday
          </Text>
          <RadioButton isActive={isYesterdayActive} />
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          style={styles.menuTextRow}
          onPress={() => handleValueSelect('Weekly')}
        >
          <Text
            style={{ color: isWeeklyActive ? '#000' : 'rgba(0,0,0,0.6)' }}
            tw="text-xl ml-4"
          >
            Weekly
          </Text>
          <RadioButton isActive={isWeeklyActive} />
        </StyledTouchableOpacity>
        <StyledTouchableOpacity
          style={styles.menuTextRow}
          onPress={() => handleValueSelect('Monthly')}
        >
          <Text
            style={{ color: isMonthlyActive ? '#000' : 'rgba(0,0,0,0.6)' }}
            tw="text-xl ml-4"
          >
            Monthly
          </Text>
          <RadioButton isActive={isMonthlyActive} />
        </StyledTouchableOpacity>
      </StyledView>
    )
  }

  return (
    <StyledView style={{ flex: 1 }}>
      <StyledTouchableOpacity
        tw="flex-row justify-between mr-4 align-center"
        style={{ width: '29%', alignSelf: 'flex-end' }}
        onPress={() => setShowMenu(true)}
      >
        <Text tw="text-md mr-1" style={{ marginTop: 2 }}>
          {value}
        </Text>
        <ChevronDown color="#000" />
      </StyledTouchableOpacity>
      {showMenu && <Menu />}
    </StyledView>
  )
}
