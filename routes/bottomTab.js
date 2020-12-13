import { View, Text , Icon} from 'react-native';
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../Screens/Home'
import registeredFaces from '../Screens/registeredFaces'
import Map from '../Screens/Map'
import Settings from '../Screens/Settings'



const BottomTabNavigator = createBottomTabNavigator({


    Home: {

        screen: Home,
        navigationOptions: () => {
            return{
                tabBarIcon: () => {
                    <Ionicons name="ios-person" size={24} color="black" />
                }
            }
        }

    },
    registeredFaces: {

        screen: registeredFaces,
        navigationOptions: () => {
            return{
                tabBarIcon: () => {
                    <Ionicons name="ios-person" size={24} color="black" />
                }
            }
        }

    },
    Map: {

        screen: Map,
        navigationOptions: () => {
            return{
                tabBarIcon: () => {
                    <Ionicons name="ios-person" size={24} color="black" />
                }
            }
        }

    },
    Settings: {

        screen: Settings,
        navigationOptions: () => {
            return{
                tabBarIcon: () => {
                    <Ionicons name="ios-person" size={24} color="black" />
                }
            }
        }

    },


})

export default BottomTabNavigator;

