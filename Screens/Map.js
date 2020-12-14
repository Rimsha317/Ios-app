import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Image, Button, 
    ScrollView, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
export default function profile() {



    const [initial, setInitial] = useState({

        latitude: 24.953974,
        longitude: 67.0575571,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035,
    })

    const mapRef = useRef(null)


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log(location)

            setInitial({

                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035,

            })

            mapRef.current.animateCamera({
                latitude: location.latitude,
                longitude: location.longitude,
            })

        })();
    }, []);


    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={initial}
                
                ref={mapRef}
            >
                <Marker
                    coordinate={initial}
                    title={"Loacation"}
                    description={"Here is your car"}
                />
            </MapView>
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});