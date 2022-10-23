import { View, Text, StyleSheet, TextInput, Button, TouchableHighlight, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import shortid from 'shortid';

export default function Factura({facturas, setFacturas, guardarMostrarForm, guardarFacturasStorage}) {

const [producto, setProducto] = useState('');
const [cantidad, setCantidad] = useState('');
const [precio, setPrecio] = useState('');

const crearNuevaFactura = () => {
    if( 
    producto.trim() === '' || 
    cantidad.trim() === '' || 
    precio.trim() === '' || 
    !isNaN(producto) || 
    isNaN(cantidad) ||
    isNaN(precio) 
    ) 
    {
        mostrarAlerta();
        return;
    }

    const factura = {producto, cantidad, precio};

    factura.id = shortid.generate();

    // Agregar al state 
    const facturasNuevo = [...facturas, factura];
    setFacturas(facturasNuevo);

    // Pasar las facturas a storage
    guardarFacturasStorage(JSON.stringify(facturasNuevo));
    
    // Ocultar el formulario
    guardarMostrarForm(false);
    
    // Resetear el formulario
   

}

const mostrarAlerta = () => {
    Alert.alert(
        'Error', //titulo
        'Datos erroneos', //mensaje
        [{ text: 'OK' }] //Arreglo de botones
    )
}

    return (
    <>
    <ScrollView style={styles.formulario}>
        <View>
            <Text style={styles.label}>Producto: </Text>
            <TextInput style={styles.input} onChangeText = {texto => setProducto(texto)}/>
        </View>

        <View>
            <Text style={styles.label}>Cantidad de producto: </Text>
            <TextInput style={styles.input} keyboardType='numeric' onChangeText={texto => setCantidad(texto)}/>
        </View>
        
        <View>
            <Text style={styles.label}>Precio Unitario: </Text>
            <TextInput style={styles.input} keyboardType='numeric' onChangeText={texto => setPrecio(texto)}/>
        </View>

        <View>
            <TouchableHighlight onPress={() => crearNuevaFactura() } style = {styles.btnSubmit}>
                <Text style = {styles.textoSubmit}>Crear Factura</Text>
            </TouchableHighlight>
        </View>

    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius:15,
    },
    btnSubmit: {
        marginTop: 50,
        padding: 10,
        backgroundColor:'#7A7979',
        marginVertical: 10,
        borderRadius:15,
    },
    textoSubmit: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
       
})
