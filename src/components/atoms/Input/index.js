import { View, Text , StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Input = ({label}) => {
  return (
    <View>
     <Text style={styles.label} >{label}</Text>
    <TextInput style={styles.TextInput}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    TextInput: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
    },
    label: {
        fontSize: 16,
        color: '#7D8797',
        marginBottom: 6,
        fontFamily: 'Nunito-Regular',
    }

})