import React, { Component } from 'react'
import { render } from 'react-dom'
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'


export default function profile() {


    return (
            
            <ScrollView style={style.container}>
            <Text style={{ fontWeight: 'bold', marginVertical: 30, textAlign:'center', marginTop:50 }} onPress={() => { alert('alert') }}>Map</Text>
            
            <View style={{ flexDirection: "row", borderColor: "gray", borderTopWidth: 3 }}>
                <Image source={{ uri: "https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png"}}  style={style.Image} />
                <View style={{ flexDirection: "row", marginTop: 40, marginLeft: 20,marginTop:100 }}>
                   
                </View>
            </View>
            
            

          </ScrollView>
                
               
        
    );
}


const style = StyleSheet.create({

    container: {
        flex: 1,

    },
    Image: {
        width: 400,
        height: 500,
        marginTop: 30
    },

    Text: {

        fontWeight: "bold",
        marginRight: 200,

}


})