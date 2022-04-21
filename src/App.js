import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Image, ImageBackground, Alert, TouchableOpacity} from 'react-native';
import { Button, TextInput} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Input } from 'react-native-elements';
import { openDatabase } from 'react-native-sqlite-storage';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

import FirstPageScreen from './FirstPageScreen';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';


// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="CartScreen" component={CartScreen} />
//     </Drawer.Navigator>
//   );
// }


const App = () => {
    return(
      
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="FirstPageScreen" component={FirstPageScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SecondScreen" component={SecondScreen} />
      <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      <Stack.Screen name="FourthScreen" component={FourthScreen} />
      
        </Stack.Navigator>
     </NavigationContainer>
    )
}
const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

export default App;