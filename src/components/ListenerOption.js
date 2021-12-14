import React, { useState } from 'react'
import {StyleSheet,ScrollView, Text,KeyboardAvoidingView, TextInput,TouchableOpacity, View } from 'react-native'
import { Ionicons,Entypo } from '@expo/vector-icons';


const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"   
const ListenerOption = ({values,secure,handleChange, handleSecure}) => {
    return (
        <ScrollView>
            <KeyboardAvoidingView 
                
                behavior={scrollBehavior} 
                keyboardVerticalOffset={100} 
                style={{justifyContent:'center', alignItems:'center', width:'100%'}} >
               <View style={styles.inputContainer}>
                
                <Ionicons name="person-outline" size={24} color="gray" />
                
                <TextInput
                    placeholder="First Name"
                    style={styles.input}
                    placeholderTextColor="gray"
                    value= {values.firstName}
                    onChangeText={handleChange("firstName")}
           
                    />
                </View>
                    
                <View style={styles.inputContainer}>
                
                <Ionicons name="person-outline" size={24} color="gray" />
                
                <TextInput
                    placeholder="Last Name"
                    style={styles.input}
                    placeholderTextColor="gray"
                    value= {values.lastName}
                    onChangeText={handleChange("lastName")}
             
                />
                </View>
               <View style={styles.inputContainer}>
                
                <TextInput
                    placeholder="Phone Number"
                    style={styles.input}
                    placeholderTextColor="gray"
                    value= {values.phone}
                    onChangeText={handleChange("phone")}
                    
                    />
                </View>
               <View style={styles.inputContainer}>
                
                <Ionicons name="mail" size={24} color="gray" />
                
                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    placeholderTextColor="gray"
                    value= {values.email}
                    onChangeText={handleChange("email")}
           
                    />
                </View>
               <View style= {[styles.inputContainer,{justifyContent:'space-between',paddingRight:10}]}>
                    <View style={{alignItems:'center',flexDirection:'row'}}>
                        
                          <Entypo name="lock" size={24} color="gray" />
                         
                        <TextInput
                            placeholder="Password"
                            style={styles.input}
                            placeholderTextColor="gray"
                            secureTextEntry={secure}
                            value={values.password}
                            onChangeText={handleChange("password")}
           
                        />
                    </View>
                    <TouchableOpacity  onPress={ ()=> handleSecure()} >
                        {secure ?
                        <Ionicons name="eye-off" size={24} color="gray" />
                        :
                        <Ionicons name="eye" size={24} color="gray" />
                        }
                    </TouchableOpacity>
                    
                
                </View>
              
            </KeyboardAvoidingView>
           
        </ScrollView>
    )
}

export default ListenerOption

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth:1,
        alignItems:'center',
        borderRadius:5,
        borderColor:'white',
        width:'100%',
        flexDirection:'row',
        height:50,
        paddingLeft:10,
        
        marginTop:30, 
    },
    icon:{color:'gray'},
    input:{
        paddingLeft:10,
        alignSelf:'center',
        // height:50,
        color:"white",
    }
})
