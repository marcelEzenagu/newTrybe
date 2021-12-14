import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import OnBoarding from '../screens/OnBoarding';
import EmailVerification from '../screens/EmailVerification';
import MainEntry from './MainEntry';

const Stack = createNativeStackNavigator();

  const globalOption = {
    headerStyle:{backgroundColor: "#2c68ed"},
    headerTitleStyle: {color:'white'},
    headerTintColor:"white"
  }

const RootNavigator = () => {
    return (
        <NavigationContainer theme={DarkTheme} >
            <Stack.Navigator initialRouteName="SignUp">
                <Stack.Screen  name="Login" component={SignIn} options={{ headerShown: false }} /> 
                <Stack.Screen  name="SignUp" component={SignUp} options={{ headerShown: false }} /> 
                <Stack.Screen  name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} /> 
                <Stack.Screen  name="EmailVerification" component={EmailVerification} options={{ headerShown: false }} /> 
                <Stack.Screen  name="Main" component={MainEntry} options={{ headerShown: false }} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})
