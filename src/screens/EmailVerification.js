import React from 'react'
import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native'

const EmailVerification = ({navigation}) => {
    return (
        <View style= {{flex:1,width:"100%", alignItems:'center',marginTop:170,paddingHorizontal:15}}>
            {/* GIF */}
            <View style={{marginVertical:60, }}>
                <Image 
                    source={require("../../visualAssets/mailGif.gif")}
                    style={{height:200, width:200}}
                />
            </View>
            <View  style={{color:'white',width:'90%', alignItems:'center'}}>
                <Text style={{color:'white',marginVertical:20}} >Email Verification</Text>
                <Text  style={{color:'#EAEAEA',marginVertical:10, fontSize:12,}}>
                    A Verification mail has been sent to your email.
                    Kindly, check your email(inbox, or promotion) for 
                    your Verification link and activate your account.
                </Text>
            </View>
            <View style={{marginVertical:20}}>
                <TouchableOpacity  
                    onPress={() => navigation.navigate("Login")}
                    style={{height:50,marginVertical:30,width:380, backgroundColor:'#FF0039', borderRadius:5}} >
                    <Text style={{color:'white',alignSelf:'center',marginHorizontal:10,marginTop:10}}>Continue</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default EmailVerification

const styles = StyleSheet.create({})
