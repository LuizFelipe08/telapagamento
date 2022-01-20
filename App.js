import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import Picker from './src/components/index'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements/dist/checkbox/CheckBox';

export default function App() {

  const [isSelected, setSelected] = useState(false)

  return (
    <View style={styles.container}>

      <View style={styles.centralizar}>
        <Image style={styles.imagemgnc} source={require('./assets/gnclogo.jpeg')} />
      </View>

      <View style={styles.centralizar}>
        <Image style={styles.imagemepiv} source={require('./assets/logoepiv.jpeg')} />
      </View>

      <View style={styles.centralizar}>

        <View style={styles.containerInput}>
          <TextInput
            style={styles.inputText}
            placeholder="CÓDIGO"
          />
        </View>

        <View style={styles.areaCheck}>
          <CheckBox
            style={styles.checkbox}
            title="Selecione para alterar"
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="blue"
            uncheckedColor="red"
            checked={isSelected}
            onPress={() => setSelected(!isSelected)}
          />
        </View>

        <View style={styles.pickerComponente}>
          <Picker />
        </View>

        <View style={styles.pagarBtn}>
          <Button
            title="Pagar"
          />
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pickerComponente: {
    flex: 1,
    height: 30,
    width: 215,
    marginTop: 15,
  },
  inputText: {
    width: 200,
    marginTop: 50,
  },
  imagemgnc: {
    width: 260,
    height: 50,
    marginTop: 50
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f4f4f4'
  },
  pagarBtn: {
    width: 100,
    marginTop: 60
  },
  centralizar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagemepiv: {
    width: 260,
    height: 125,
    marginTop: 50
  },
  checkbox: {
    width: 25,
    height: 20,
  },
  containerInput: {
    alignItems: 'center'
  },
  areaCheck: {
    marginTop: 15
  }
})
