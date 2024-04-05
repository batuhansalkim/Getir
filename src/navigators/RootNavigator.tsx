import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Entypo,FontAwesome,MaterialCommunityIcons} from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";

const Stack = createBottomTabNavigator();

const RootNavigator = () => {

    const CustomTabBarButton = ({children})=>{
        return(
            <TouchableOpacity style={{
                width:56,
                height:56,
                backgroundColor:"#5C3EBC",
                justifyContent:"center",
                alignItems:"center",
                borderRadius:33,
                marginTop:-8,
                borderWidth:3,
                borderColor:"white"
            }}>
                <Entypo name='list' size={32} color="#FFD00C"/>
            </TouchableOpacity>
        )
    }

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
            height:50,
        }
    }}>
        <Stack.Screen 
            name='Anasayfa' 
            component={HomeNavigator} 
            options={{
                tabBarIcon:({color})=>(<Entypo name="home" size={24} color={color}/>)
        }}/>

        <Stack.Screen 
            name='Search' 
            component={HomeNavigator} 
            options={{
                tabBarIcon:({color})=>(<FontAwesome name="search" size={24} color={color}/>)
        }}/>
        <Stack.Screen
            name='list'
            component={HomeNavigator}
            options={{
                tabBarIcon:(props)=><CustomTabBarButton {...props}/>
            }}
        />
        <Stack.Screen 
            name='User' 
            component={HomeNavigator} 
            options={{
                tabBarIcon:({color})=>(<FontAwesome name="user" size={24} color={color}/>)
        }}/>

        <Stack.Screen 
            name='Gift' 
            component={HomeNavigator} 
            options={{
                tabBarIcon:({color})=>(<MaterialCommunityIcons name="gift" size={24} color={color}/>)
        }}/>
    </Stack.Navigator>
  )
}

export default RootNavigator