import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import IconOnly from './iconOnly'

const Button = ({type, title, onPress, icon}) => {
  if(type === 'icon-only'){
    return <IconOnly icon={icon} onPress={onPress} />
  }

  return (
    <TouchableOpacity style={Styles.container(type)} onPress={onPress}>
      <Text style={Styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const Styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background: colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }) ,
    text: (type) => ({
        fontSize: 16, 
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        color: type === 'secondary' ? colors.button.secondary :colors.button.primary.text, 
    }) 
})