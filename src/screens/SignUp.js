import React, { useState } from 'react'
import {  StyleSheet, Text,KeyboardAvoidingView,ScrollView, TouchableOpacity, View } from 'react-native'
import ArtistOption from '../components/ArtistOption'
import ListenerOption from '../components/ListenerOption'
import Switcher from '../components/Switcher'

const SignUp = ({navigation}) => {
    const [active, setActive] = useState(true)
    const [values, setValues] = useState({
        firstName:"",
        stageName:'',
        lastName:"",
        phone:'',
        password:'',
        email:"",    
    })
    
    const [secure, setSecure] = useState(true)

    const handleSecureText = () => setSecure(!secure)

    const handleChange = name => text => {
        setValues({...values, [name]: text})
    }


    const handleSignUp = (e) => {
        e.preventDefault()
        let details = {...values}
        console.log(details)
        navigation.navigate("EmailVerification")
    }

    
    const scrollBehavior = Platform.OS === "ios" ? "padding" : "height"    
    return (
            <ScrollView
            
                contentContainerStyle= {{flex:1,width:"100%", alignItems:'center',marginTop:10,paddingHorizontal:15}}>
                <View style={{alignSelf:'flex-start',marginVertical:20}} >
                    <Text style={{color:'#FF0000', fontWeight:'bold', fontSize:20,marginTop:20}} >Sign Up</Text>
                    <Text style={{color:'white', }} >
                        Create an account to continue
                    </Text>
                </View>
                
                <Switcher setActive={setActive} active={active}  />
                <KeyboardAvoidingView  style={{width:'100%' }}
                
                    behavior={scrollBehavior} 
                    keyboardVerticalOffset={100} 
                >
                    {!active ?
                        <ListenerOption 
                            active={active} 
                            setActive= {setActive}      
                            values={values} 
                            handleSignUp={handleSignUp} 
                            handleChange={handleChange} 
                            secure={secure}
                            handleSecure={handleSecureText}
                                
                        />
                    :   
                        <ArtistOption 
                            active={active} 
                            setActive= {setActive}      
                            values={values} 
                            handleSignUp={handleSignUp} 
                            handleChange={handleChange} 
                            secure={secure}
                            handleSecure={handleSecureText}
                        
                        />
                    }
                </KeyboardAvoidingView>
                <View style={{marginVertical:30, alignItems:'center'}}>
                        <TouchableOpacity  
                            style={{height:50,marginTop:10,width:380, backgroundColor:'#FF0039', borderRadius:5}} 
                            onPress={handleSignUp}
                        >
                            
                            <Text style={{color:'white',alignSelf:'center',marginHorizontal:10,marginTop:10}}>Sign Up</Text>
                        </TouchableOpacity>
                        
                        <Text style={{color:'#D4D4D4',marginVertical:10}}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.push("Login")} >
                            <Text style={{color:'white'}}>SIGN IN</Text>
                        </TouchableOpacity>
                </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({

})
