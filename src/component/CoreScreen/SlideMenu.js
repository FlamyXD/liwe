import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {TouchableOpacity,Image,ScrollView, Text, View,StyleSheet} from 'react-native';

export default class SlideMenu extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
          <View style={{flex:0.5,alignItems:"center",justifyContent:"center"}}>
            <Image
            style={{flex:1,resizeMode:"cover"}}
            source={require('./test.jpg')}/>
          </View>
          <View style={Styles.optionsBox}>
          <TouchableOpacity
          style={Styles.option}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("Profile")
            }
          }>
            <Text style={Styles.text}>
              Username
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Styles.option}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("CompleteTasks")
            }
          }>
            <Text style={Styles.text}>
              Complete Tasks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Styles.option}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("Rewards")
            }
          }>
            <Text style={Styles.text}>
              Rewards
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={Styles.Settings}
          onPress={()=>
            {
            this.props.navigation.closeDrawer()
            this.props.navigation.navigate("Settings")
            }
          }>
            <Text style={Styles.text}>
              Settings
            </Text>
          </TouchableOpacity>
          </View>
    </View>
    )
  }
}

const Styles = StyleSheet.create({
  text:{
    color:"white",
  },
  Settings:{
    marginLeft:10,
    marginTop:100,
    marginBottom:10,
    justifyContent:"flex-start",
    flex:0.1,
  },
  option:{
    marginLeft:10,
    justifyContent:"flex-start",
    flex:0.1,
  },

  optionsBox:{
    flex:1,
    justifyContent:"space-evenly",
    backgroundColor:"grey"
  },
  container: {
    flex:1,
    backgroundColor:"#58585A"

  },
  ProfileImageBox:{
    flex:0.5
  },
  options:{
    flex:1,
    flexDirection:"column",
    justifyContent:"space-around"
  },
})
