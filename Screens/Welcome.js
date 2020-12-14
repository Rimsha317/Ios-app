import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, Button, View,
  TouchableOpacity, Image, ImageBackground
} from 'react-native';

import { auth } from '../config'

const Welcome = ({ navigation }) => {



  useEffect(() => {


    auth.onAuthStateChanged((user) => {

      if (user) {



        console.log(user)

        navigation.navigate("BottomTab")



      } else {



      }
    })


  }, [])




  return (

    <View style={styles.container}>

      <ImageBackground source={{ uri: "assets\images\images.jpg" }} style={styles.image}>
      </ImageBackground>

      <Image source={{ uri: "data:image/jpeg;base64,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" }}
        style={styles.Image} />

      <View style={styles.header}>
        <Text style={styles.boldText}>***SMART BLACK BOX***</Text>
        <Text>      Cars got smart too!</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Button title="login" color="black" style={styles.button}
          onPress={() => navigation.navigate("Login")} />
        <Text>Don't Have an Account?</Text>
        <Button title="SignUp" color="gray" style={styles.button}
          onPress={() => navigation.navigate("SignUp")} />
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    padding: 20,
    margin: 30,

  },
  boldText: {
    fontWeight: 'bold',
  },
  Image: {
    width: 200,
    height: 200,
  },
  image: {
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default Welcome;