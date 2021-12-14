import React from 'react'
import { Image, StyleSheet,ScrollView, Text,FlatList, TouchableOpacity, View } from 'react-native'

const DATA = [
    {id:1,title:"Are we there Yet", img: require("../../visualAssets/air.jpg"), info:"Marcel's", details:"Gibbberish Gibbberish Gibbberish"},
    {id:2,title:"Are we there ", img: require("../../visualAssets/h.jpg"), info:"Akon", details:"Gibbberish Gibbberish Gibbberish"},
    {id:3,title:"Are we Locked up", img: require("../../visualAssets/a.jpg"), info:"Mars", details:"Gibbberish Gibbberish Gibbberish"},
]



const TopCardItems = () => {
    return (
        <View>
            <View  style={{flexDirection:'row'}}>
                <FlatList
                        horizontal
                        data={DATA}
                        renderItem={({item}) =>
                            <View key={item.id} style={{marginRight:10}}>
                                <Text style={{color:'white',paddingVertical:10}}>{item.title}</Text>
                                <Image 
                                    source={item.img} 
                                    style={{height:200,width:350,borderRadius:5,resizeMode:'cover'}}
                                />
                        
                            </View>
                            }
                        showsHorizontalScrollIndicator={false}
                />
            </View>
              <FlatList
                    horizontal
                    data={DATA}
                    renderItem={({item}) =>
                    <View key={item.id} style={{}}>
                        <View style={{flexDirection:'row',marginHorizontal:10,marginVertical:10,alignItems:"center", justifyContent:'space-between'}}>
                            <Text  style={{color:'white'}}>{item.info}</Text>
                            <TouchableOpacity>
                                <Text  style={{color:'#FF0000', fontSize:10}}>See all</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-start',marginHorizontal:5}}>
                        
                            <Image 
                                source={item.img} 
                                style={{height:150,width:150,borderRadius:5,marginHorizontal:5,resizeMode:'cover'}}
                            />
                            <Image 
                                source={item.img} 
                                style={{height:150,width:150,borderRadius:5,marginHorizontal:5,resizeMode:'cover'}}
                            />
                           
                        </View>
                        
                    </View>
                    }
                />
        </View>
    )
}

export default TopCardItems

const styles = StyleSheet.create({})
