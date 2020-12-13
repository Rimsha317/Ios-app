import React from 'react';
import {
  StyleSheet, Text, TextInput, KeyboardAvoidingView,
  View, TouchableOpacity, Dimensions
} from 'react-native';
import { auth } from '../config'

import { Item, Input, Label, Button, Image } from 'native-base';


export default class SignUp extends React.Component {

  state = {
    Email: "",
    Password: ""
  }

  static navigationOptions = {
    title: "Login"
  }
  Login(Email,Password) {
    auth().signInWithEmailAndPassword(Email, Password).then(() => {
      this.props.navigation.navigate("Home")
    })
      .catch(error => {

        Alert.alert(error.message)
      })
  }

  render() {

    return (

      <KeyboardAvoidingView
        behavior="position"
        style={styles.container}>
        
          <Text style={{ fontWeight: 'bold',color:'#ff1493', fontSize: 25 }}>Login</Text>
        
        <Item floatingLabel

          style={{ borderBottomColor: "red" }}
        >
          <Label>Email-Id</Label>
          <Input
            value={this.state.Email}
            onChangeText={(Text) => this.setState({ Email: Text })}
          />

        </Item>
        <Item floatingLabel
          style={{ borderBottomColor: "red" }}>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            value={this.state.Password}
            onChangeText={(Text) => this.setState({ Password: Text })}
          />
        </Item>
        <Button full rounded success
          style={{ margin: 10, justifyContent: 'center'}}
          onPress={() => this.Login(this.state.Email,
            this.state.Password)}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
        </Button>


        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text style={{ textAlign: "center" }}>Don't Have an account ?</Text>

        </TouchableOpacity>
      </KeyboardAvoidingView>


    );
  }
}

const styles = StyleSheet.create({


  container: {


    flex: 1,

    backgroundColor: '#fff',

    justifyContent: 'flex-start',

  },
});








