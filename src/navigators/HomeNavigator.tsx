import React from "react";
import { Image, View } from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
 

const Stack = createStackNavigator();

export default function index(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle:{backgroundColor:"#5C3EBC"},
                    headerTitle:()=>(
                            <Image source={require("../../assets/getirlogo.png")}
                            style={{width:70,height:30,marginLeft:123
                            }}
                        />
                    )
                }}
            />

            <Stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerStyle:{backgroundColor:"#5C3EBC"},
                    headerTitle:()=>(
                            <Image source={require("../../assets/getirlogo.png")}
                            style={{width:70,height:30,marginLeft:123
                            }}
                        />
                        
                    )
                }}
            />
        </Stack.Navigator>        
    )
}