import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo} from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";

const Stack = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator 
    initialRouteName='Anasayfa' 
    screenOptions={{
        // tabBarHideOnKeyboard=true,
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#5C3EBC",
        tabBarInactiveTintColor:"#959595",
        headerShown:false,
        tabBarStyle:{
            height:80,
        }
    }}>
        <Stack.Screen 
            name='Anasayfa' 
            component={HomeNavigator} 
            options={{
                tabBarIcon:({color})=>(<Entypo name="home" size={24} color={color}/>)
        }}/>
    </Stack.Navigator>
  )
}

export default RootNavigator