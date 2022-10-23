import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { black } from 'react-native-paper/lib/typescript/styles/colors';

const CalculoFactura = ({item,eliminarFactura}) => {

    const dialogoEliminar = id => {
        console.log('eliminando...', id);
        eliminarFactura(id);
    }


  return (
    <View style ={styles.factura}>
            <View>
                <Text style={styles.label}>Producto: </Text>
                <Text style={styles.texto}>{item.producto}</Text>
            </View>
            <View>
                <Text style={styles.label}>Cantidad de Producto: </Text>
                <Text style={styles.texto}>{item.cantidad} Unidades</Text>
            </View>
            <View>
                <Text style={styles.label}>Precio Unitario: </Text>
                <Text style={styles.texto}>$ {item.precio}</Text>
            </View>

            <View>
                <Text style={styles.label}>Descuento: </Text>
                <Text style={styles.texto}>$ {item.cantidad>=15 && item.cantidad<=49 ? ((item.precio*item.cantidad)*0.05) :(null)}

                {item.cantidad>=50 && item.cantidad<=79 ? ((item.precio*item.cantidad)*0.13) :(null)}

                {item.cantidad>=80 ? ((item.precio*item.cantidad)*0.25) :(null)}

                </Text>
            </View>

            <View>
                <Text style={styles.label}>Total (sin descuento): </Text>
                <Text style={styles.texto}>$ {item.precio*item.cantidad}</Text>
            </View>

            <View>
                <Text style={styles.label}>Total a pagar: </Text>
                <Text style={styles.texto}>$ {item.cantidad>=15 && item.cantidad<=49 ? ((item.precio*item.cantidad)-(item.precio*item.cantidad)*0.05) :(item.precio*item.cantidad)}

                {item.cantidad>=50 && item.cantidad<=79 ? ((item.precio*item.cantidad)-(item.precio*item.cantidad)*0.13) :(null)}

                {item.cantidad>=80 ? ((item.precio*item.cantidad)-(item.precio*item.cantidad)*0.25) :(null)}

                </Text>
            </View>

            
            
            <View>
                <TouchableHighlight onPress={ () => dialogoEliminar(item.id) } style = {styles.btnEliminar}>
                    <Text style ={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    factura: {
        backgroundColor: '#FFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius:15,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
        color: 'black'
    },
    texto: {
        fontSize: 18,
        color: 'black'
     },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10,
        borderRadius:15,
    },
    textoEliminar: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
        
})

export default CalculoFactura;