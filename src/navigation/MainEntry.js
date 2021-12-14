import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {MaterialCommunityIcons, FontAwesome , MaterialIcons} from '@expo/vector-icons'
import Library from '../innerScreens/Library';
import NewMusics from '../innerScreens/NewMusics';
import Search from '../innerScreens/Search';
import Earnings from '../innerScreens/Earnings';

const Tab = createBottomTabNavigator()

const tabBarOptions = {
    tabBarActiveTintColor: '#FF0039',
    tabBarStyle:{backgroundColor:"black"}
};

const MainEntry = () => {
    return (
        <Tab.Navigator screenOptions={tabBarOptions} >
            <Tab.Screen 
                name='Home' 
                component={Home}  
                options={{
                    headerShown: false ,
                    tabBarLabel:"Explore",
                    tabBarIcon: ({color,size}) => 
                <MaterialCommunityIcons name="headphones-settings" size={size} color={color} />                    }
                }
             />

             <Tab.Screen 
                name='Library' 
                component={Library}  
                options={{
                    tabBarLabel:"Library",
                    tabBarIcon: ({color,size}) => 
                        <MaterialIcons name="library-music" size={size} color={color} />
                }}
             />

             <Tab.Screen 
                name="newMusic" 
                component={NewMusics}  
                options={{
                    tabBarLabel:"New Music",
                    tabBarIcon: ({color,size}) =>
                       <MaterialIcons name="fiber-new" size={size} color={color} />
                }}
             />
             
             <Tab.Screen 
                name="search" 
                component={Search}  
                options={{
                    tabBarLabel:"Search",
                    tabBarIcon: ({color,size}) => 
                       <FontAwesome name="search" size={size} color={color} />
                }}
             />

             <Tab.Screen 
                name="earnings" 
                component={Earnings}  
                options={{
                    tabBarLabel:"Earnings",
                    tabBarIcon: ({color,size}) => 
                       <MaterialIcons name="insert-chart" size={size} color={color} />

                    
                }}
             />
             

            
        </Tab.Navigator>
    )
}

export default MainEntry

const styles = StyleSheet.create({})
