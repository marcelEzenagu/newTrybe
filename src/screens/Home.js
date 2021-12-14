import React, { useState } from 'react'
import { StyleSheet,SectionList,FlatList, ScrollView,Text, View,TouchableOpacity } from 'react-native'
import Player from '../components/Player'
import TopCardItems from '../components/TopCardItems'
import {Ionicons,FontAwesome} from '@expo/vector-icons'

const Home = () => {
    const [notice, setNotice] = useState(false)
    const handleNotification = () => setNotice(!notice)

    

    return (
        <View style= {{flex:1,width:"100%",marginTop:60,paddingHorizontal:15}}>
            
            <View  style={{flexDirection:'row',justifyContent:'space-between',marginVertical:10,width:'100%', alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}} >
                    <Ionicons name="person-circle-sharp" size={24} color="red" />
                        <Text style={{color:'white',paddingHorizontal:5}}>Explore</Text>
                </View>
                
                <TouchableOpacity onPress={handleNotification} >
                    {notice ?
                        <Ionicons name="notifications" size={16} color="white"  />
                        :    
                        <Ionicons name="notifications-off" size={16} color="red"  />
                    }
                </TouchableOpacity>
            </View>
            <ScrollView>
                <TopCardItems />
                <TopCardItems />
            </ScrollView>
            <Player />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
