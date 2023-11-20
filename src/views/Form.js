import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Header from '../componets/Header'

const Form = () => {
  const [nombre, changeName] = useState('');
  const [apellido, changeLastName] = useState('');
  const [marca, changeBrand] = useState('');
  const [placa, changePlate] = useState('');
  const [puerta, changeDoor] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View >
      <Header titulo={'Registrar cita'}/>
      <Text
        style={styles.text}
      >
        Nombre:
      </Text>
      <TextInput
        onChangeText={changeName}
        value={nombre}
      />
      <Text
        style={styles.text}
      >
        Apellido:
      </Text>
      <TextInput
        onChangeText={changeLastName}
        value={apellido}
      />
      <Text
        style={styles.text}
      >
        Marca:
      </Text>
      <TextInput
        onChangeText={changeBrand}
        value={marca}
      />
      <Text
        style={styles.text}
      >
        Placa:
      </Text>
      <TextInput
        onChangeText={changePlate}
        value={placa}
      />
      <Text
        style={styles.text}
      >
        Puerta:
      </Text>
      <TextInput
        onChangeText={changeDoor}
        value={puerta}
      />

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setOpen(true)} >
          <Text style={styles.textButton} >Elegir Fecha</Text>
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

      <TouchableOpacity
        style={styles.boton} >
          <Text style={styles.textButton} >Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boton:{
    borderWidth: 1,
    width: 250,
    height: 30,
    backgroundColor: "#223B90",
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
});

export default Form;