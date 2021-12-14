import React from 'react'
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityext, View } from 'react-native'

const Switcher = ({setActive, active}) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center',width:'100%',marginVertical:5}} >

                <TouchableOpacity style={{marginRight:2,borderWidth:active? 0:0.4,borderColor:active? "none":"white",backgroundColor:active? "#2972AA":"black",paddingVertical:10,paddingHorizontal:50}} onPress={() => setActive(!active)}>
                    <Text style={{color:"white"}}>I'm an Artist</Text>
                </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:2,borderWidth:!active? 0:0.4,borderColor:!active? "none":"white",backgroundColor:!active? "#2972AA":"black",paddingVertical:10,paddingHorizontal:50}} onPress={() => setActive(!active)}>
                        <Text style={{color:"white"}}>I'm a Listener</Text>
                    </TouchableOpacity>
                
         </View>
    )
}

export default Switcher

const styles = StyleSheet.create({})
