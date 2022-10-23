import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'
import React, {Component}from 'react'



export default class Calculadora extends Component {

  constructor(){
    super()
    this.state = {
      resultadoText: "",
      calculoText: "", 
    }
    this.operaciones = ['D','+','-','*','/','√','!']
  }

  CalculateResult(){
    const text = this.state.resultadoText

    let valor = 0
    let result = 1
    let valsqrt = 0
    let operador1 
    let operador2 
 
    for(let i=0; i< text.length; i++){
      if(!isNaN(text[i])){ 
       //operador1 = text[i]
       valor += text[i]   
      }
      else if(text[i] == '!'){
        operador1 = text[i]
      }
      if(!isNaN(text[i])/*text[i]== '√'*/) {
        //operador2 = text[i]
        valsqrt += text[i]
      }
      else if(text[i]== '√'){
        operador2 = text[i]
      }
    }

    if(operador1 == '!'){
      while(parseFloat(valor)>1){
        result= parseFloat(valor)*result
        valor = parseFloat(valor)-1
      }
      this.setState({
        calculoText: result
      })
    }
    else if(operador2 == '√'){
      this.setState({
        calculoText: Math.sqrt(valsqrt)
      })
    }
    else{
      this.setState({
        calculoText: eval(text)
      })
    }
  }

  validaciones() {
    const text = this.state.resultadoText
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
      case '√':
      case '.':
        return false
    }
    return true
  }

  btnPress(text){
    console.log(text)

    if(text == '=') {
      return this.validaciones()&&this.CalculateResult()
    }
    this.setState({
      resultadoText: this.state.resultadoText+text
    })
  }

  operate(operacion) {
    switch(operacion){
      case 'D':
        let text = this.state.resultadoText.split('')
        text.pop()
        this.setState({
          resultadoText: text.join('')
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
      case '√':
      case '!':
        const lastChar = this.state.resultadoText.split('').pop()
        if(this.operaciones.indexOf(lastChar) >0 ) return
        if(this.state.text == "") return
        this.setState({
          resultadoText: this.state.resultadoText + operacion
        })

    }
  }
  
 render() {
  let rows = []
  let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
  for(let i=0; i<4; i++){
    let row = []
    for(let j = 0; j<3; j++){
      row.push(<TouchableOpacity key={nums[i][j]} onPress={() => this.btnPress(nums[i][j])} style={styles.btn}>
        <Text style={styles.btnTxt}>{nums[i][j]}</Text>
      </TouchableOpacity>)
    }
    rows.push(<View key={i} style={styles.row}>{row}</View>)
  }

  let op = []
  for(let i=0; i<7; i++){
    op.push(<TouchableOpacity key={this.operaciones[i]} onPress={() => this.operate(this.operaciones[i])} style={styles.btn}>
      <Text style={styles.btnOp}>{this.operaciones[i]}</Text>
    </TouchableOpacity>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultado}>
        <Text style={styles.resultadoText}>{this.state.resultadoText}</Text>
      </View>
      <View style={styles.calculo}>
        <Text style={styles.calculoText}>{this.state.calculoText}</Text>
      </View>
      <View style={styles.botones}>
        <View style={styles.numeros}>
          {rows}
        </View>
        <View style={styles.operaciones}>
          {op}
        </View>
      </View>
    </View>
  )
 }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  btn: {
    flex:1,
    alignItems:'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnTxt: {
    fontSize: 35,
    color: 'black'
  },
  btnOp: {
    fontSize: 35,
    color: 'white'
  },
  resultado: {
    flex:2,
    backgroundColor: 'black',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculo:{
    flex:1,
    backgroundColor:'#7A7979',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  botones: {
    flex:7,
    flexDirection: 'row'
  },
  numeros: {
    flex:3,
    backgroundColor: '#7A7979'
  },
  operaciones:{
    flex:1,
    justifyContent:'space-around',
    alignItems: 'stretch',
    backgroundColor: 'black'
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  calculoText:{
    fontSize:24,
    color:'white'
  },
  resultadoText:{
    fontSize:40,
    color:'white'
  }
})