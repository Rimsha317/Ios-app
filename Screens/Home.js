import React from 'react';
import { View, Text, style , Image, ScrollView} from 'react-native'
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
             <ScrollView contentContainerStyle = {{justifyContent:'center'}}>
               
               <Text style={{justifyContent:'center', fontWeight:'bold',
               marginTop:100,fontSize:30,textAlign:'center', color:'#f54dac'}}>Registered Persons</Text>
               {
                 this.state.persons &&
                 this.state.persons.map( persons => {
                   return (
                     
                     <View style={{marginTop:20, marginLeft:10}}>
                        <Image style={{width:150, height:150, flexDirection:'row'}} 
                        source = {{uri: persons.image}}/>
                       <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>
                           {persons.Name} </Text>
                           <Text style={{fontSize:15}}> 
                            {persons.Age}   </Text>
                            <Text style={{fontSize:15}}> 
                            {persons.Gender}  </Text>
                           
                           
                       
                     </View>
                   )
                 })
               }
               
             </ScrollView>
             
           )
           
         }
       }
   
   export default Home
   