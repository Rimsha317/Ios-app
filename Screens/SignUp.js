import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, 
   View, TouchableOpacity, Alert } from 'react-native';
import { createAppContainer, createStackNaviagtor} from 'react-navigation' 
import * as firebase from 'firebase'
import {  Item, Input, Label, Button, Image } from 'native-base'


export default class SignUp extends React.Component {



  state={
    Email:"",
    Password:""
}

 navigationOptions = {

    title: "Sign Up"
}
SignUp(Email,Password){
  firebase.auth().createUserWithEmailAndPassword
(Email,Password).then(()=>{
    this.props.navigation.replace("Home")
})
  .catch(error=>{
Alert.alert(error.message)
  })
}
  render(){
  return (
    <KeyboardAvoidingView
  

  behavior="position"
   style={styles.container}>
     
   
         <Text style= {{fontWeight:'bold',color:'#ff1493',  fontSize:25}}>Sign Up</Text>

      
      <Item floatingLabel
  style={{borderBottomColor:"red"}}
   >
         <Label>Email-Id</Label>
              <Input
            value={this.state.Email}
            onChangeText={(Text)=>this.setState({Email:Text})}
              />
            </Item>  
       <Item floatingLabel
       style={{borderBottomColor:"red"}}>
            <Label>Password</Label>
            <Input
   secureTextEntry={true}
              value={this.state.Password}
         onChangeText={(Text)=>this.setState({Password:Text})}
            />
       </Item>
    <Button full rounded success
        style={{margin:10, justifyContent:'center'}}
          onPress={()=>this.SignUp(this.state.Email, this.state.Password)}
         
   >
         <Text style ={{fontSize:20, color:'white'}}>Sign Up</Text>
            </Button>
   <TouchableOpacity
   onPress={()=>this.props.navigation.navigate("Login")}>
          <Text style={{textAlign:"center"}}>Already Have an account ?</Text>
  </TouchableOpacity>
  </KeyboardAvoidingView>
  );
  }  
}


const styles = StyleSheet.create({
  container: {
    flex:0.7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 42,
    fontSize: 40,
    width: "90%",
    borderColor: "#9b9b9b",
    borderBottomWidth: 1,
    marginTop: 8,
},
boldText: {
  fontWeight: 'normal',
  fontSize:50,
  color:'#e93766'
  
},

text: {

    color: "#e93766",
    fontSize: 40,
    marginBottom: 40,
    alignSelf: "center",
  },
  
  button: {
    marginBottom: 40,
  },
  Image: {
      marginBottom:50,
      marginTop:50,
       width: 250,
        height: 100,
    
  }
})







