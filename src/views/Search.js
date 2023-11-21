import { StyleSheet, Text, View , TextInput} from 'react-native'
import React, {useState} from 'react'
import Header from '../componets/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Search = () => {
    
    const [nombre, changeName] = useState('');
    const [apellido, changeLastName] = useState('');

  return (
    <SafeAreaView style={styles.background}>
        <Header titulo={'Buscar cita'}/>
        <Text
            style={styles.text}
          >
            Nombre:
          </Text>
          <TextInput
            onChangeText={changeName}
            value={nombre}
            style={styles.textInput}
          />
          <Text
            style={styles.text}
          >
            Apellido:
          </Text>
          <TextInput
            onChangeText={changeLastName}
            value={apellido}
            style={styles.textInput}
          />
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'left',
        color: 'white',
        padding: 5,
    },
    background:{
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#2D74A7',
    },
    textInput:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
})