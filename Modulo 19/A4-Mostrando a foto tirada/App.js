import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default class ProjCamera extends Component{
  constructor(props){
    super(props);
    this.state = {
      imagem:null
    };

    this.tirarFoto = this.tirarFoto.bind(this);
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
        <View style={styles.controlArea}>
          <Button title="Tirar foto" onPress={this.tirarFoto} />
          <Image resizeMode="contain" style={styles.imagem} source={this.state.imagem} />
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
    //flex:1
    height:300
  },
  controlArea:{
    height:300
  },
  imagem:{
    width:200,
    height:200
  }
});
