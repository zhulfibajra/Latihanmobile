import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBackDrak } from '../../../assets'

const IconOnly = ({onPress, icon}) => {

   const Icon = () => {
      if(icon === 'back-dark'){
        return <IconBackDrak />;
      }

      if(icon === 'back-light'){
        return <IconBackDrak />;
      }

      return <IconBackDrak />;
   } 

  return (
    <TouchableOpacity onPress={onPress
    }>
      <Icon />
    </TouchableOpacity>
  )
}

export default IconOnly