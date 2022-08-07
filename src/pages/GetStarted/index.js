import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { colors } from '../../utils'

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={Styles.page}>
        <ILLogo />
      <Text style={Styles.title}>Konsultasi dengan
dokter jadi lebih
mudah & fleksibel</Text>
        <View>
        <Button title="Get Started" onPress={() => navigation.navigate('Register') } />
        <Gap height={16} /> 
        <Button type="secondary" title="Sign In" onPress={() => navigation.navigate('Login') }/>
        </View>
    </ImageBackground>
  )
}

export default GetStarted

const Styles = StyleSheet.create({
   page: {
     padding: 40,
     justifyContent: 'space-between',
     backgroundColor: colors.white,
     flex: 1
   },
   title: {
     fontSize: 28,
     fontWeight: '600',
     color: colors.white,
     marginTop: 91,
     fontFamily: 'Nunito-SemiBold',
   }
})