import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class ProjCamera extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>Teste 001</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    //backgroundColor:'#000000'
  },
  camera:{
    flex:1
  }
});
