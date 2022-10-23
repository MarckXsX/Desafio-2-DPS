import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

import Calculadora from './Screens/Calculadora';
import Conversor from './Screens/Conversor';
import Tienda from './Screens/Tienda';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName='Calculadora'
    activeColor='#F92626'
    barStyle={{backgroundColor:'#000000'}}>
      <Tab.Screen name='Calculadora' component={Calculadora}/>
      <Tab.Screen name='Conversor' component={Conversor}/>
      <Tab.Screen name='Tienda' component={Tienda}/>
    </Tab.Navigator>
    </NavigationContainer>

  )
}