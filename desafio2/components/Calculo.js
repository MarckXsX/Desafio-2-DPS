import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { black } from 'react-native-paper/lib/typescript/styles/colors';

export default function Calculo(props) {
    
    const {moneda,colon,pesoM,euro,libras,suizo, errorMessage} = props;

  return (
    <View style={styles.content}>
    {moneda && (
      <View style={styles.boxResult}>
    <Text style={styles.title}>CONVERSIONES</Text>
    <DataResult title="De dolar a colon:" value={`${colon} ₡`} />
    <DataResult title="De dolar  a peso mexicano:" value={`${pesoM} $`} />
    <DataResult title="De dolar a euros:" value={`${euro} €`} />
    <DataResult title="De dolar a libras esterlinas:" value={`${libras} £`} />
    <DataResult title="De dolar a franco suizo:" value={`${suizo} Fr`} />
    </View>
    )}
    <View>
    <Text style={styles.error}>{errorMessage}</Text>
    </View>
    </View>
  )
}

function DataResult(props) {
    const {title, value} = props;
    return (
    <View style={styles.value}>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.text}>{value}</Text>
    </View>
    );
   }
   const styles = StyleSheet.create({
    content: {
    marginHorizontal: 40,
    backgroundColor: 'white'
    },
    text:{
        color: 'black'
    },
    boxResult: {
    padding: 30,
    backgroundColor: 'white'
    },
    title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black'
    },
    value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    },
    error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
    },
   });