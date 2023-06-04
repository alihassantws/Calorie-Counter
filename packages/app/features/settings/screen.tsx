import { Container, Row, StyledImage, StyledView } from 'app/design/layout'
import { Text, H1 } from 'app/design/typography'
import { useAppSelector } from 'app/hooks/reduxHooks'
import { selectAuthSlice } from 'app/services/redux/reducers/authSlice'
import { useWindowDimensions } from 'react-native'

export default function Settings() {
const {user}  = useAppSelector(selectAuthSlice)
let {email, name, photoURL} = user
console.log(email, 'USeee')

  const { width, height } = useWindowDimensions()
  return (
    <StyledView>
      <StyledView
        style={{
          width,
          padding: 0,
          margin: 0,
          height: height * 0.3,
        }}
      >
        <StyledImage
          source={require('../../assets/HealthySpicyRamen.png')}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </StyledView>
      <StyledView
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          height: '100%',
        }}
      >
        <StyledView
          style={{
            position: 'absolute',
            top: -(width * 0.15),
            alignSelf: 'center',
          }}
        >
          <StyledImage
            source={{uri:photoURL}}
            style={{ width: width * 0.15,height:height * 0.15,borderRadius:100, aspectRatio: 1 }}
          />
        </StyledView>
        <Text
          style={{ color: '#000', marginTop: width * 0.2, textAlign: 'center' }}
          tw="font-medium text-2xl"
        >
        {name||'John Smith'} 
        </Text>
        {/* <Text
          style={{ color: '#393939' }}
          tw="mt-2 text-center font-medium text-xl"
        >
          Top Cook
        </Text> */}
        <Text
          style={{ color: 'rgba(0,0,0,0.45)' }}
          tw="mt-2 text-center font-medium text-xl"
        >
          New York, USA
        </Text>
        <Row
          style={{
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            marginTop: 30,
          }}
        >
          <StyledView>
            <Text style={{ color: '#2F2F2F' }} tw="text-center text-xl">
              12
            </Text>
            <Text style={{ color: '#999999' }} tw="text-center text-xl">
              Recipes
            </Text>
          </StyledView>
          <StyledView>
            <Text style={{ color: '#2F2F2F' }} tw="text-center text-xl">
              12
            </Text>
            <Text style={{ color: '#999999' }} tw="text-center text-xl">
              Recipes
            </Text>
          </StyledView>
          <StyledView>
            <Text style={{ color: '#2F2F2F' }} tw="text-center text-xl">
              12
            </Text>
            <Text style={{ color: '#999999' }} tw="text-center text-xl">
              Recipes
            </Text>
          </StyledView>
        </Row>
      </StyledView>
    </StyledView>
  )
}
