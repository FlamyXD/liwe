import React, { Component } from 'react';
import {ImageBackground,Image,ScrollView,StatusBar, View, Text,TextInput,StyleSheet, TouchableOpacity, MaterialCommunityIcons} from 'react-native';
import { createStackNavigator,navigationOptions,createDrawerNavigator, DrawerActions} from 'react-navigation';



export default class TheTask extends React.Component
{
  static navigationOptions= {header:null}

    render()
    {
    return (
    <View style={Styles.screen}>
      <View style={Styles.header}>
        <TouchableOpacity // button back
        style={Styles.button}
        onPress={()=> this.props.navigation.navigate("HomeScreen")}>
         <Image
         style={{resizeMode:"contain", width:20,height:20}}
         source={require('./icon/back.png')}/>
        </TouchableOpacity>
        <TouchableOpacity // button option
        style={Styles.button}
        onPress={()=> this.props.navigation.navigate("Settings")}>
          <Image
          style={{resizeMode:"contain",width:25,height:25}}
          source={require('./icon/options.png')}/>
        </TouchableOpacity>
      </View>
      <View style={{flex:1,width:"100%",alignSelf:"center"}}>
        <Image
        style={Styles.ImagePreview}
        source={require('./test.jpg')}/>
      </View>
      <ScrollView style={{flex:0.5, alignSelf:"center", backgroundColor:"#FFFFFF",width:"100%"}}>
        <Text style={Styles.text}>
          TEXT
        </Text>
      </ScrollView>
    </View>


    )
  }
}


const Styles = StyleSheet.create({
  text:{
    justifyContent:"center",
    alignSelf:"center",
    padding:10,
    shadowColor:"black",
    shadowOpacity: 10,
    shadowRadius:30,
    shadowOffset:{width: 50, height:50},
  },
  ImagePreview:{
    resizeMode:"stretch",
    alignSelf:"center",

  },
  screen:{
    flex:1,
    backgroundColor:"#FFFFFF",
    flexDirection: 'column',
    justifyContent: 'center',
  },
  back:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
  },
  options:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
  },
  header:{
      flex:0.1,
      flexDirection: "row",
      justifyContent: 'space-between',
      backgroundColor:"white",
  },
  button:{
    marginRight:"10%",
    marginLeft:"10%",
    justifyContent:"center",
},
})
