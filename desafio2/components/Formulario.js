import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

export default function Formulario(props) {
    const {setMoneda} = props
  return (
    <View style={styles.viewForm}>
    <View style={styles.viewInputs}>
    <TextInput
    placeholder="Moneda $"
    keyboardType="numeric"
    style={styles.input}
    onChange={(e) => setMoneda(e.nativeEvent.text)}
    />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: 'black',
    borderRadius: 30,
    height: -9,
    justifyContent: 'center',
    },
    viewInputs: {
    flexDirection: 'row',
    },
    input: {
    height: 50,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    width: '60%',
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 10,
    color: 'white',
    paddingHorizontal: 20,
    }
   });
   