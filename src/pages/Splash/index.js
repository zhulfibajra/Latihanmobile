import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { colors } from '../../utils'

const Splash = () => {
  return (
    <View style={Styles.page}>
      <ILLogo />
      <Text style={Styles.title}>My Doctor</Text>
    </View> 
  )
}

export default Splash


const Styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white, 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize: 20, 
        fontWeight: '600', 
        color: colors.text.primary,
    }
})