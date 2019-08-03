import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class ProjCamera extends Component{
  constructor(props){
    super(props);
    this.state = {
      imagem:null,
      cameraType:RNCamera.Constants.Type.back
    };

    this.tirarFoto = this.tirarFoto.bind(this);
    this.trocarCamera = this.trocarCamera.bind(this);
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

  render(){
    return(
      <View style={styles.container}>
        <RNCamera 
          style={styles.camera}
          ref={(camera)=>{
            this.camera = camera;
          }}
          //type={RNCamera.Constants.Type.back}
          type={this.state.cameraType}
          permissionDialogTitle="Permissão para usar camera"
          permissionDialogMessage="Nós precisamos usar sua camera"
        />
        <View style={styles.controlArea}>
          <View style={styles.controlAreaItem}>
            
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
