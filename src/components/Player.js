import React, { useState } from 'react'
import { Image, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'


const Player = () => {
    const [play, setPlay] = useState(false)
    const handlePlay = ()=> setPlay(!play)

    return (
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center', marginVertical:10}}>
            <View style={{flexDirection:'row',}} >
                 <Image 
                    source={require('../../visualAssets/h.jpg')} 
                    style={{height:50,width:50,borderRadius:5,resizeMode:'cover'}}
                />
               <View style={{paddingLeft:10}}>
                   <Text style={{color:"white"}}>Music title</Text>
                   <Text style={{color:"white", fontFamily:'Roboto',fontWeight:'100', fontSize:10}}>Artist's name</Text>
               </View>
            </View>
            <View style={{}}>
                <TouchableOpacity onPress={handlePlay} >
                {   play ?
                    <Ionicons name="play-circle" size={24} color="#FF0039"  />
                : 
                    <Ionicons name="pause-circle-outline"  size={24} color="#FF0039" />
                 }
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Player

const styles = StyleSheet.create({})
