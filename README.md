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

>Alterar no build.gradle

    //Importado A01-Mod18A
    maven{ url "https://jitpack.io" }


    //Busca biblioteca, se não tiver multiplex usa v26.1.0
    subprojects {
        project.configuration.all{
            resolutionStrategy.eachDependency { details -> 
                if(details.requested.group == 'com.android.suport' && 
                    !details.requested.name.contains('multidex')){

                    details.useVersion "26.1.0"
                }
            }
        }
    }


>Alterar gradle-wrapper.properties

    distributionUrl=https\://services.gradle.org/distributions/gradle-5.4.1-all.zip
    por
    distributionUrl=https\://services.gradle.org/distributions/gradle-4.4-all.zip

>Alterar versão do build.gradle


>Alterar MainApplication.java

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
       packages.add(new MainReactPackage());
       packages.add(new RNCameraPackage());
      return packages;
    }


>Alterações para IOS

>Permissões em Info.plist

    <key>NSCameraUsageDescription</key>
	<string>Este app quer usar sua camera</string>

    <key>NSPhotoLibraryUsageDescription</key>
	<string>Este app quer usar sua biblioteca de fotos</string>

>Desfazer link

    react-native unlink react-native-camera


>Corrigindo

    I'm using 0.59.0-rc.3

    and solved by these steps:

    In gradle-wrapper.properties
    change distributionUrl to distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.1-all.zip
    and in root build.gradle file change gradle classpath to this: classpath 'com.android.tools.build:gradle:3.3.0'
    Copy file 'metro.config.js' in 0.59-stable/template to your project.
    Remove node_modules, yarn install, and run-android again.
    (And make sure version of metro in package.json "metro-react-native-babel-preset": "0.51.0" is the same with current metro's version)

>Instalar node_modules

    yarn install

>In app build.gradle, add a second line of missingDimensionStrategy :

    missingDimensionStrategy "react-native-camera", "general"