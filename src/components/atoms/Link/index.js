import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Link = ({title, size, align}) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  )
}

export default Link

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: colors.text.secondary,
        fontFamily: 'Nunito-Regular',
        textDecorationLine: 'underline',
        textAlign: align
    }) 

})

