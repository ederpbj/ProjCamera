# ProjCamera
Projeto react-native para funcionalidades de câmera

# ProjetoCamera
Módulo 18

## M18 Aula 01


## Iniciando:

git::https://github.com/ederpbj/ProjetoCamera.git

>Clone

    git clone https://github.com/ederpbj/ProjetoCamera.git

>Criar projeto

    react-native init ProjetoCamera

>Corrigindo erros

    npm audit fix
    npm i --save-dev jetifier
    npx jetify

>Atualizar yarn

    npm i -g yarn

>Resetar cach

    react-native start --reset-cache

>Biblioteca camera

    npm install react-native-camera
    react-native link react-native-camera

>Tutorial não funciona

    https://blog.rocketseat.com.br/react-native-camera/
    
    
>Camera comunity

    https://www.npmjs.com/package/react-native-camera

>Autolink

    yarn add react-native-webview

    yarn react-native run-android

>build.gandle app

    defaultConfig {
        ...
        missingDimensionStrategy 'react-native-camera', 'general'
    }

>Permissões

    <uses-permission android:name="android.permission.INTERNET" />

    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO"/>
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />