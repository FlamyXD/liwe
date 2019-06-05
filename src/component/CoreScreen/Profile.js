import React, { Component } from 'react';
import {ScrollView, Image,View, Text,TextInput,StyleSheet, TouchableOpacity} from 'react-native';
import { createStackNavigator,navigationOptions } from 'react-navigation';



export default class ProfileScreen extends React.Component
{
    render()
    {
    return (
      <View style={Styles.ProfileBox}>
        <TouchableOpacity
         style={Styles.button}
         onPress={()=> this.props.navigation.navigate("HomeScreen")}>
         <Image
         style={{resizeMode:"contain", width:20,height:20}}
         source={require('./icon/back.png')}/>
        </TouchableOpacity>

        <View style={Styles.UserBox}>
            <View style={Styles.textUser}>
              <Text>
                username
              </Text>
            </View>
            <View style={Styles.Photo_Exp_Lvl}>
              <View style={Styles.textUser}>
                <Text>
                  Level 28
                </Text>
              </View>
              <View style={Styles.userPhoto}>
                <Image
                style={{resizeMode:"contain", width:50,height:50}}
                source={require('./icon/user.png')}
                />
              </View>
              <View style={Styles.textUser}>
                <Text>
                  Experience
                </Text>
              </View>
            </View>
            <View style={Styles.textUser}>
              <Text >
                Rank
              </Text>
            </View>
        </View>
      <View style={Styles.InfoBox}>
      <View style={Styles.Achievements}>
        <Text>
         Achievement
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text>
           TEST
          </Text>
        </ScrollView>
      </View>
      <View style={Styles.Exp}>
        <Text>
         Exp
        </Text>
        <Text>
          Добавить какой то эффект заполнения
        </Text>
      </View>
      <View style={Styles.Stats}>
        <Text>
         Stats
        </Text>
        <ScrollView style={Styles.ScrollView}>
          <Text>
            TEST
          </Text>
        </ScrollView>
      </View>

      </View>
    </View>
  )}
}


const Styles = StyleSheet.create({
  textUser:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },
  ScrollView:{
    flex:1,
    borderRadius:20,
    backgroundColor:"white",
    padding:"5%"
  },
  InfoBox:{
    flex:2,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  Achievements:{
    padding:"5%",
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column"
 },
 Exp:{
    padding:"5%",
    flex:1,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"column"
},
  Stats:{
    padding:"5%",
    flex:1,
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"column"
},
  Photo_Exp_Lvl:{
    padding:20,
    margin:20,
    flex:1,
    alignItems:"center",
    alignSelf:"center",
    justifyContent:"space-evenly",
  },
  UserBox:{
    justifyContent:"space-around",
    flexDirection:"row",
    flex:1,
  },
  ProfileBox:{
    flex:2,
  },
  button:{
    position:"absolute",
    flex:0.1,
    paddingTop:20,
    marginLeft:"10%",
    alignSelf:"flex-start"
  },
  userPhoto:{
    marginVertical:30,
    justifyContent:"center",
    alignSelf:"center",
    alignItems:"center",
    borderRadius:100,
    width:150,
    height:150,
    backgroundColor:"grey"
  },
})
