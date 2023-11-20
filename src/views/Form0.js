import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component, useState } from 'react'
import DatePicker from 'react-native-date-picker'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setOpen: false,
            date: new Date(),
            nombre: "",
            correo: "",
            password: "",
        };
    }
    
  render() {
    const open = () => {
        this.setState({setOpen: true})
    }

    return (
        <View>
            <Text
                style = {{
                    fontSize: 20,
                    marginLeft: 20,
                    color: "white"
                }}
            >Nombre:</Text>
            <TextInput style={{color: "white"}}
                onChangeText={nombre => this.setState({nombre})}
            ></TextInput>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    
    
})