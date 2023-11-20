import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../componets/Header'

const Home = () => {
  return (
    <View>
        <Header titulo={'Home'}/>
        <TouchableOpacity
            style={styles.boton} >
            <Text style={styles.textButton} >Registar cita</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.boton} >
            <Text style={styles.textButton} >Buscar cita</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    boton:{
        borderWidth: 1,
        width: 250,
        height: 30,
        backgroundColor: "#595C64",
        borderRadius: 40,
        marginTop: 20,
        marginLeft: 70,
        alignItems: 'center',
        padding: 5,
      },
    text:{
        fontSize: 20,
        marginLeft: 20,
        color: 'white',
        padding: 5,
      },
    textButton:{
        fontWeight: 'bold'
      }
})