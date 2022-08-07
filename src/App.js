import { View, Text } from 'react-native'
import React from 'react'
import { ILLogo } from './assets'
import { Splash } from './pages'
import GetStarted from './pages/GetStarted'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'

const App = () => {
  return (
    // <Splash />
    // <GetStarted />
    <NavigationContainer>
       <Router />
    </NavigationContainer>
  )
}

export default App