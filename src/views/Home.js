import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../componets/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function Home({navigation}) {
  return (
    <SafeAreaView style={styles.background}>
        <Header titulo={'Home'}/>
        <View style={styles.container}>
          <TouchableOpacity
              style={styles.boton} 
              onPress={() => navigation.navigate('Form')}
              >
              <Text style={styles.textButton} >Registar cita</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.boton} 
              onPress={() => navigation.navigate('Search')}
              >
              <Text style={styles.textButton} >Buscar cita</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Home
//2d74a7
const styles = StyleSheet.create({
    boton:{
        width: 250,
        height: 50,
        borderWidth: 2,
        backgroundColor: "#595C64",
        borderRadius: 40,
        marginTop: 20,
        alignItems: 'center',
        padding: 5,
      },
    textButton:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        padding: 5,
        textAlign: 'center',
      },
    background:{
        height: hp('100%'),
        backgroundColor: '#2D74A7',
    },
    container:{
      alignItems: 'center'
    }
})