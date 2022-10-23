import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import Formulario from '../components/Formulario';
import Calculo from '../components/Calculo';

export default function Conversor() {

  const[moneda, setMoneda] = useState(null);
  const[colon, setColon] = useState(null);
  const[pesoM, setPesoM] = useState(null);
  const[euro, setEuro] = useState(null);
  const[libras, setlibras] = useState(null);
  const[suizo, setSuizo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (moneda) calculo();
     else reset();
     },[moneda]);
       const calculo = () => {
        if(!moneda){
          setErrorMessage('Ingrese una cantidad');
        }else{

          const a = moneda*8.75
          const b = moneda*21.46
          const c = moneda*0.86
          const d = moneda*0.78
          const e = moneda*0.92
          setColon(a.toFixed(2))
          setPesoM(b.toFixed(2))
          setEuro(c.toFixed(2))
          setlibras(d.toFixed(2))
          setSuizo(e.toFixed(2))        
        }
      }
  
   const reset = () => {
   setErrorMessage('');
   setMoneda(null);
   };

  return (
   <>
   <StatusBar barStyle="light-content"/>
   <SafeAreaView style={styles.Header}>
    <Text style={styles.HeadApp}>Conversor de Monedas</Text>
    <Formulario
    setMoneda ={setMoneda}/>
   </SafeAreaView>
   <Calculo
   moneda={moneda}
   colon={colon}
   pesoM={pesoM}
   euro={euro}
   libras={libras}
   suizo={suizo}
   errorMessage={errorMessage}/>
   </>
  )
}

const styles = StyleSheet.create({
  Header:{
  backgroundColor:'black',
  height:200,
  borderBottomLeftRadius:30,
  borderBottomRightRadius:30,
  alignItems:'center'
  },
  HeadApp: {
    fontSize:25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:35,
  },
  safeArea: {
  height: 290,
  alignItems: 'center',
  },
  background: {
  backgroundColor: 'black',
  height: 200,
  width: '100%',
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  position: 'absolute',
  zIndex: -1,
  },
  titleApp: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff',
  marginTop: 15,
  },
 
 })
 