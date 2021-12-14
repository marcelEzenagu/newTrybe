import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView,Text,View,TextInput, TouchableOpacity } from 'react-native'
import {Ionicons,Entypo} from '@expo/vector-icons'

const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"    
  
const SignIn = ({navigation}) => {

    const [secure, setSecure] = useState(true)
        
    const [values, setValues] = useState({
        email:"",
        password:""
        })

    const handleChange = (name) => text => {
        setValues({...values, [name]: text})
    }

    const handleSecure = () => setSecure(!secure)
    const handleLogin = (e) => {
        e.preventDefault()
        // console.log({...values})
        // setValues("")
        navigation.replace("Main")
    }
    return (
        <KeyboardAvoidingView 
            keyboardVerticalOffset={100}
            behavior={scrollBehavior}
            style= {{flex:1,width:"100%", alignItems:'center',marginTop:120,paddingHorizontal:15}}>
            <View style={{alignSelf:'flex-start',marginVertical:20}} >
                <Text  style={{color:'#FF0000', fontWeight:'bold', fontSize:20,marginTop:20}}>Sign In</Text>
                <Text  style={{color:'white'}}>Sign In with your registered email address</Text>
            </View>
           
            <View 
                style={{width:'100%'}}
                    
            >

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
                    <TouchableOpacity  onPress={ () => handleSecure()} >
                        {!secure ?
                        <Ionicons name="eye-off" size={24} color="gray" />
                        :
                        <Ionicons name="eye" size={24} color="gray" />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignSelf:'flex-end', marginVertical:30}} >
                <TouchableOpacity>
                    <Text style={{color:'white',}}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginVertical:30, alignItems:'center'}}>
                <TouchableOpacity onPress={handleLogin}  style={{height:50,marginVertical:30,width:380,marginTop:40, backgroundColor:'#FF0039', borderRadius:5}} >
                    <Text style={{color:'white',alignSelf:'center',marginHorizontal:10,marginTop:10}}>Login</Text>
                </TouchableOpacity>
                <View style={{alignItems:'center',marginTop:30}}>
                    <Text style={{color:'white',marginVertical:10}}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{color:'white'}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
           
                   
                </View>

        </KeyboardAvoidingView>
    )
}

export default SignIn

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
