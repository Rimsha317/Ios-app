import React, { useState, Component } from 'react';
import { render } from 'react-dom'
import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput } from 'react-native'


export default function profile({navigation}) {
    const [Email, setEmail] = useState('');

    return (
            
            <ScrollView style={style.container}>
            <Text style={{ fontWeight: 'bold', marginVertical: 30, textAlign:'center', marginTop:50 }} onPress={() => { alert('alert') }}>    RIMSHA MEHMOOD</Text>
            
            <View style={{ flexDirection: "row", borderColor: "gray", borderTopWidth: 3 }}>
            <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: 40,color:'#e93766', fontWeight: "normal", justifyContent:'center', textAlign:'center' }}> SETTINGS</Text>
                    </View>
                    <View>
                <Image source={{ uri: "https://image.flaticon.com/icons/png/512/17/17214.png"}}  style={style.Image} />
                <View style={{ flexDirection: "row", marginTop: 50 }}></View>
                   

                </View>
            </View>
            <View style={style.container}>
        <Text style={{ fontWeight: 'bold',fontSize:25, marginVertical: 30,
         textAlign:'center', marginTop:50, }} >Email:          abc@gmail.com {Email}</Text>
        <TextInput style={style.TextInput}  />
      </View>

      <Button title="Logout" color="green" style={style.button}
          onPress={() => navigation.navigate("Welcome")} />
       
            

          </ScrollView>
                
               
        
    );
}


const style = StyleSheet.create({

    container: {
        flex: 1,

    },
    Image: {
        marginTop:80,
        width: 100,
        height: 100,
        marginRight:30,
        justifyContent:'center'

        
    },

    Text: {

        fontWeight: "bold",
        marginRight: 200,

},

TextInput:{
     fontWeight: 'bold',
      marginVertical: 30, 
      textAlign:'center', 
     
    },
    button: {
        
            marginBottom: 40,
    }
})