import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModalSelector from 'react-native-modal-selector'
import DatePicker from 'react-native-date-picker';
import Header from '../componets/Header'

const Edit = ({route, navigation}) => {
    const datos = route.params.appointment;
    const num = route.params.numPuerta;
    console.log(datos.Id)
    console.log(num)
    const [nombre, changeName] = useState(datos.Nombre);
    const [apellido, changeLastName] = useState(datos.Apellido);
    const [marca, changeBrand] = useState(datos.Marca);
    const [placa, changePlate] = useState(datos.Placa);
    const [color, changeColor] = useState(datos.Color);
    const [modulo, changeModule] = useState(datos.Modulo);
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
      console.log(numPuerta);
    };

    const eliminarCita = () => {
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
                Alert.alert(datos.Mensaje);
                navigation.navigate('Home');
              }
          }
      };
      xhttp.open("GET", "https://ferreous-realinemen.000webhostapp.com/eliminarCita.php?id="+datos.Id+
      "&puerta="+num, true);
      xhttp.send();
      navigation.navigate('Home')
    }
  
    return (
      <SafeAreaView style={styles.background}>
        <Header titulo={'Editar o Eliminar cita'}/>
        
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
              >
                <Text style={styles.textButton} >Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.boton}
              onPress={eliminarCita}
              >
                <Text style={styles.textButton} >Eliminar</Text>
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
  }
});

export default Edit;