import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalSelector from 'react-native-modal-selector'
import DatePicker from 'react-native-date-picker';
import Header from '../componets/Header'

const Form = ( {navigation} ) => {
  const [nombre, changeName] = useState('');
  const [apellido, changeLastName] = useState('');
  const [marca, changeBrand] = useState('');
  const [placa, changePlate] = useState('');
  const [color, changeColor] = useState('');
  const [modulo, changeModule] = useState('');
  const [puerta, changeDoor] = useState('Seleciona una puerta');
  const [numPuerta, changeNumberDoor] = useState(0);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const data = [
    {key: 1, label: 'Puerta 1: Olimpica'},
    {key: 2, label: 'Puerta 2: Boulevard'},
    {key: 3, label: 'Puerta 3: Revolución'},
  ]

  const changeText = (text) => {
    changeDoor(text);
    console.log(text);
  };

  const changeKey = (key) => {
    changeNumberDoor(key);
  };

  const validData = () => {
    if (nombre == '') {
      Alert.alert("Error: Nombre obligatorio");
      return;
    }
    else if (apellido == '') {
      Alert.alert("Error: Apellido obligatorio");
      return;
    }
    else if (modulo == '') {
      Alert.alert("Error: Modulo obligatorio");
      return;
    } else{
      registrarCita();
    }
  }

  const registrarCita = () => {
    if (numPuerta != 0) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              // Typical action to ve performed when the document is ready
              console.log(xhttp.responseText);
              if (xhttp.responseText === "1") {
                  console.log([fechaFormateada, nombre, apellido, marca, placa, color, numPuerta, date, modulo])
                  Alert.alert("Registro insertado");
                  navigation.navigate('Home')
              }
              else{
                  Alert.alert("Error");
              }
          }
      };
      fechaFormateada = date.toISOString().slice(0, 19).replace('T', ' ');    //Formateo fecha a un formato datetime para MySQL
      xhttp.open("GET", "https://cuceiaccess.000webhostapp.com/registrarCita.php?nombre="+nombre+
      "&apellido="+apellido+"&marca="+marca+"&placa="+placa+"&color="+color+"&puerta="+numPuerta+"&fecha="+fechaFormateada+"&modulo="+modulo, true);
      xhttp.send();
    } else {
      Alert.alert("Puerta no elegida: Error en la puerta selecionada");
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <Header titulo={'Registrar cita'}/>
      
      <ScrollView style={styles.scroll}>
        <View style={styles.main}>
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

            <TouchableOpacity
              style={styles.boton}
              onPress={() => setOpen(true)} >
                <Text style={styles.textButton} >{'Seleciona una fecha'}</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              minimumDate={new Date()}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
          </View>
          <View style={styles.form}>
            <Text style={styles.text}>Nombre:</Text>
            <TextInput
              onChangeText={changeName}
              value={nombre}
              style={styles.textInput}
            />
            <Text style={styles.text}>Apellido:</Text>
            <TextInput
              onChangeText={changeLastName}
              value={apellido}
              style={styles.textInput}
            />
            <Text style={styles.text}>Modulo:</Text>
            <TextInput
              onChangeText={changeModule}
              value={modulo}
              style={styles.textInput}
            />
            <Text style={styles.text}>Marca {'('}Opcional{')'}:</Text>
            <TextInput
              onChangeText={changeBrand}
              value={marca}
              style={styles.textInput}
            />
            <Text style={styles.text}>Placa {'('}Opcional{')'}:</Text>
            <TextInput
              onChangeText={changePlate}
              value={placa}
              style={styles.textInput}
            />
            <Text style={styles.text}>Color {'('}Opcional{')'}:</Text>
            <TextInput
              onChangeText={changeColor}
              value={color}
              style={styles.textInput}
            />
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.boton} 
              onPress={validData}
              >
                <Text style={styles.textButton} >Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal:{
    fontSize: 20,
    color: 'white',
    padding: 5,
    borderWidth: 2
  },
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
  },
  scroll:{
    height: hp('100%'),
    width: wp('100%')
  },
  main:{
    height: hp('100%'),
    width: wp('100%'),
    marginBottom: 300
  },
});

export default Form;