import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class ProjCamera extends Component{
  render(){
    return(
      <View style={styles.container}>
        <RNCamera 
          style={styles.camera}
          ref={(camera)=>{
            this.camera = camera;
          }}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle="Permissão para usar camera"
          permissionDialogMessage="Nós precisamos usar sua camera"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#000000'
  },
  camera:{
    flex:1
  }
});
