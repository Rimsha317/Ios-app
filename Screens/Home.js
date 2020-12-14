import React from 'react';
import { View, Text, style, Image, ScrollView } from 'react-native'
import {
  Form, Item, Input, Label, Button,
  List, ListItem
} from 'native-base'
import { auth, firestore } from '../config'
import 'firebase/firestore'

class Home extends React.Component {
  state = {
    persons: null
  }

  componentDidMount() {
    console.log('mounted')
    firestore.collection('persons')

      .get()
      .then(snapshot => {
        const persons = []
        snapshot.forEach(doc => {
          const data = doc.data()
          persons.push(data)
        })
        this.setState({ persons: persons })

        console.log(snapshot)

      })
      .catch(error => console.log(error))
  }



  render() {

    return (
      <ScrollView contentContainerStyle={{ justifyContent: 'center' }}>

        <Text style={{
          justifyContent: 'center', fontWeight: 'bold',
          fontSize: 30, textAlign: 'center', color: '#f54dac', marginTop:30,
        }}>Registered Persons</Text>
        {
          this.state.persons &&
          this.state.persons.map(persons => {
            return (



              <View style={{ flexDirection: "row", borderBottomWidth: 2, borderBottomColor: "black", marginBottom: 10 }}>

                <Image style={{ width: 120, height: 120, }}
                  source={{ uri: persons.image }} />

                <View style={{ flexDirection: "column", justifyContent: "center", marginLeft: 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>
                    {persons.Name} </Text>
                  <Text style={{ fontSize: 15 }}>
                    {persons.Age}  </Text>
                  <Text style={{ fontSize: 15 }}>
                    {persons.Gender} </Text>
                </View>
              </View>






            )
          })
        }

      </ScrollView>

    )

  }
}

export default Home
