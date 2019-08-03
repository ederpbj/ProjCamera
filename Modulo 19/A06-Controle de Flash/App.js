import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class ProjCamera extends Component{
  constructor(props){
    super(props);
    this.state = {
      imagem:null,
      cameraType:RNCamera.Constants.Type.back,
      cameraFlash:RNCamera.Constants.FlashMode.off,
      cameraFlashText:"Flash OFF"
    };

    this.tirarFoto = this.tirarFoto.bind(this);
    this.trocarCamera = this.trocarCamera.bind(this);
    this.trocarFlash = this.trocarFlash.bind(this);
  }

  tirarFoto(){
    if(this.camera){
      //this.camera.takePictureAsync({ quality:0.8, width:500, base64:true})
      this.camera.takePictureAsync({ quality:0.8, width:500 }).then((data)=>{
        //data.width
        //data.height
        //data.uri
        //data.base64
        //{ uri: ... }
        //alert("Tirou a foto!");

        this.setState({imagem:data});
        

        
      });
    }
  }

  trocarCamera(){
    if(this.camera){
      let state = this.state;

      //Verifica se é camera traseira e troca para fontal
      if(this.state.cameraType == RNCamera.Constants.Type.back){
        state.cameraType = RNCamera.Constants.Type.front;
      }else{
        state.cameraType = RNCamera.Constants.Type.back;
      }

      this.setState(state);
    }
  }

  trocarFlash(){
    if(this.camera){
      let state = this.state;

      switch (state.cameraFlash) {

        case RNCamera.Constants.FlashMode.off:
          state.cameraFlash = RNCamera.Constants.FlashMode.on;
          state.cameraFlashText = "FLASH ON";
          break;

        case RNCamera.Constants.FlashMode.on:
          state.cameraFlash = RNCamera.Constants.FlashMode.auto;
          state.cameraFlashText = "FLASH AUTO";
          break;

        case RNCamera.Constants.FlashMode.auto:
          state.cameraFlash = RNCamera.Constants.FlashMode.torch;
          state.cameraFlashText = "FLASH TORCH";
          break;

        case RNCamera.Constants.FlashMode.torch:
          state.cameraFlash = RNCamera.Constants.FlashMode.off;
          state.cameraFlashText = "FLASH OFF";
          break;
      
        default:
          break;
      }

      this.setState(state);
      
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <RNCamera 
          style={styles.camera}
          ref={(camera)=>{
            this.camera = camera;
          }}
          type={this.state.cameraType}
          flashMode={this.state.cameraFlash}
          permissionDialogTitle="Permissão para usar camera"
          permissionDialogMessage="Nós precisamos usar sua camera"
        />
        <View style={styles.controlArea}>
          <View style={styles.controlAreaItem}>
            <Button title={this.state.cameraFlashText} onPress={this.trocarFlash} />
          </View>
          <View style={styles.controlAreaItem}>
            <Button title="Tirar foto" onPress={this.tirarFoto} />
          </View>
          <View style={styles.controlAreaItem}>
            <Button title="Trocar" onPress={this.trocarCamera} />
          </View>
          
        </View>
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
    
  },
  controlArea:{
    height:100,
    flexDirection:'row'
  },
  controlAreaItem:{
    flex:1,
    padding:5
  },
  imagem:{
    width:200,
    height:200
  }
});
