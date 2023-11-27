import { StyleSheet, Text, View , TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import Header from '../componets/Header'
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalSelector from 'react-native-modal-selector'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Search = () => {
  const data = [
    {key: 1, label: 'Puerta 1: Olimpica'},
    {key: 2, label: 'Puerta 2: Boulevard'},
    {key: 3, label: 'Puerta 3: Revolución'},
  ]
  const [nombre, changeName] = useState('');
  const [apellido, changeLastName] = useState('');
  const [puerta, changeDoor] = useState('Seleciona una puerta');
  const [numPuerta, changeNumberDoor] = useState(0);

  const changeText = (text) => {
    changeDoor(text);
    console.log(text);
  };

  const changeKey = (key) => {
    changeNumberDoor(key);
    console.log(numPuerta);
  };

  const buscarCita = () => {
    if (numPuerta != 0) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to ve performed when the document is ready
              console.log(xhttp.responseText);
              var datos = JSON.parse(xhttp.responseText);
              if (datos.Id === -1) {
                  Alert.alert(datos.error);
              }
              else{
                var datos = JSON.parse(xhttp.responseText);
                console.log(datos.Nombre);
                console.log(datos.Fecha);
                console.log(datos.Marca);
                console.log(datos.Placa);
                console.log(datos.Color);
                console.log(datos.Modulo);
              }
          }
      };
    
      xhttp.open("GET", "https://ferreous-realinemen.000webhostapp.com/buscarCita.php?nombre="+nombre+
      "&apellido="+apellido+"&puerta="+numPuerta, true);
      xhttp.send();
    } else {
      Alert.alert("Puerta no elegida: Error en la puerta selecionada");
    }
    
  }

  return (
    <SafeAreaView style={styles.background}>
        <Header titulo={'Buscar cita'}/>
        <View>
          <View style={styles.container}>
            <ModalSelector
              data={data}
              supportedOrientations={['landscape']}
              accessible={true}
              cancelButtonAccessibilityLabel={'Cancelar'}
              style={styles.boton}
              onChange={(option)=>{ 
                changeText(option.label)
                changeKey(option.key)
              }}
              >
              <TextInput
                  style={styles.textButton}
                  editable={false}
                  onChange={changeDoor}
                  value={puerta} 
                  
                  />
            </ModalSelector>
          </View>
          <View style={styles.form}>
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
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.boton}
                onPress={buscarCita}
                >
                  <Text style={styles.textButton} >Buscar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  boton:{
    borderWidth: 1,
    width: 250,
    height: 50,
    backgroundColor: "#595C64",
    borderRadius: 40,
    marginTop: 20,
    alignItems: 'center',
    padding: 5,
    color: 'white'
  },
  text:{
    fontSize: 20,
    textAlign: 'left',
    color: 'white',
    padding: 5,
  },
  textButton:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    padding: 5,
    textAlign: 'center'
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
  container:{
    alignItems: 'center'
  },
  form:{
    marginHorizontal: 10,
    marginTop: 10
  }
})