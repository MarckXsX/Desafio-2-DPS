import { View, Text, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform, StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import Formulario from '../components/FormularioFactura'
import CalculoFactura from '../components/CalculoFactura'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Tienda() {

  const [facturas, setFacturas] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);
  
  useEffect(() => {
    const obtenerFacturasStorage = async () => {
      try {
        const facturasStorage = await AsyncStorage.getItem('facturas');
        if(facturasStorage) {
          setFacturas(JSON.parse(facturasStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }
  obtenerFacturasStorage();
  }, []);

  // Elimina las facturas del state
  const eliminarFactura = id => {
    const facturasFiltradas = facturas.filter( factura => factura.id !== id );
    setFacturas( facturasFiltradas );
    guardarFacturasStorage(JSON.stringify(facturasFiltradas));
  }

  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  }

  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }

  // Almacenar las facturas en storage
  const guardarFacturasStorage = async (facturasJSON) => {
    try {
      await AsyncStorage.setItem('facturas', facturasJSON);
    } catch (error) {
      console.log(error);
    }
  }

  return (      
    <TouchableWithoutFeedback onPress={() => cerrarTeclado() }>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Registro de Compras, Tienda Mimi S.A</Text>
    <View>
  <TouchableHighlight onPress={ () => mostrarFormulario() } style={styles.btnMostrarForm}>
    <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar Factura' : 'Crear Factura'} </Text>
  </TouchableHighlight>
    </View>
  <View style={styles.contenido}>
  { mostrarform ? (
  <>
  <Text style={styles.titulo}>Ingreso de Productos</Text>
  <Formulario
  facturas={facturas}
  setFacturas={setFacturas}
  guardarMostrarForm={guardarMostrarForm}
  guardarFacturasStorage={guardarFacturasStorage}
  />
  </>
  ) : (
  <>
  <Text style={styles.titulo}> {facturas.length > 0 ? 'Facturas Realizadas' : 
 'No hay Facturas, agrega una'} </Text>
  <FlatList
  style={styles.listado}
  data={facturas}
  renderItem={ ({item}) => <CalculoFactura item={item}
 eliminarFactura={eliminarFactura} /> }
  keyExtractor={ factura => factura.id}
  />
  </>
  ) }
  
  </View>
  </View>
  </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  contenedor: {
  backgroundColor: 'black',
  flex: 1
  },
  titulo: {
  color: '#FFF',
  marginTop: Platform.OS === 'ios' ? 40 : 20 ,
  marginBottom: 20,
  fontSize: 24,
  fontWeight: 'bold',
  textAlign: 'center'
  }, 
  contenido: {
  flex: 1,
  marginHorizontal: '2.5%',
  },
  listado: {
  flex: 1,
  },
  btnMostrarForm: {
  padding: 10,
  backgroundColor:'#7A7979',
  marginVertical: 10,
  },
  textoMostrarForm: {
  color: '#FFF',
  fontWeight: 'bold',
  textAlign: 'center'
  }
 });