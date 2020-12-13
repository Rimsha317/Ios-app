import React from 'react';
import { View, Text, style } from 'react-native'
import { Form, Item, Input, Label, Button ,
   List,ListItem} from 'native-base'
import { auth , firestore } from '../config'
import 'firebase/firestore'

class Home extends React.Component {
    state={
        persons:null
      }
   
      componentDidMount(){
        console.log('mounted')
        firestore.collection('persons')
         .get()
         .then(snapshot => {
           const persons = []
           snapshot.forEach(doc => {
             const data = doc.data()
             persons.push(data)
           })
           this.setState({ persons : persons})
   
           console.log(snapshot)
              
         })
         .catch(error => console.log(error))
      }
   
      render(){
    
           return(
             <View style = {{justifyContent:'center'}}>
               
               <Text style={{justifyContent:'center', fontSize:'bold',
               marginTop:100,fontSize:30,textAlign:'center'}}>Registered Persons</Text>
               {
                 this.state.persons &&
                 this.state.persons.map( persons => {
                   return (
                     <View style={{marginTop:20, marginLeft:10}}>
                       <Text style={{fontSize:20, fontWeight:'bold'}}>
                           {persons.Name} - {persons.Age}</Text>
                       
                     </View>
                   )
                 })
               }
               
             </View>
           )
         }
       }
   
   export default Home
   