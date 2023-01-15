import Header from "../components/Header";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button, TextInput, Image } from 'react-native';
import { AboutScreen } from "./About"
import { ContactScreen } from "./Contact"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProfileScreen } from "./Profile";
import { useNavigation } from "@react-navigation/native";

const Info = createStackNavigator();

const PersonalInfo = () => {
    const nav = useNavigation()

  return (
      <Info.Navigator>
        <Info.Screen 
          name="Back" 
          component={() => (
            <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
              <TouchableOpacity style = {styles.card} onPress = {() => nav.navigate('Profile')}>
              <Image  
              source = {require('../assets/icons8-name-100.png')}
              style = {styles.image}>
              </Image>
                <Text style = {styles.btntext}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.card} onPress = {() => nav.navigate('About')}>
              <Image  
              source = {require('../assets/icons8-reading-100.png')}
              style = {styles.image}>
              </Image>
                <Text style = {styles.btntext}>About{'\n'}Healthify</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.card} onPress = {() => nav.navigate('Contact')}>
              <Image  
              source = {require('../assets/icons8-mail-100.png')}
              style = {styles.image}>
              </Image>
                <Text style = {styles.btntext}>Contact{'\n'}Us</Text>
              </TouchableOpacity>
            </View>
          )}

          options={{ headerShown: false }} 
        />
        <Info.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
          headerTitle: () => <Header name = "Profile"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Info.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
          headerTitle: () => <Header name = "About Us"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
        <Info.Screen 
          name="Contact" 
          component={ContactScreen} 
          options={{
          headerTitle: () => <Header name = "Contact Us"/>,
          headerStyle: {
            height:60,
            backgroundColor: '#FFFFFF',
          }
        }}
        />
      </Info.Navigator>
  )
}


export default PersonalInfo

const styles = StyleSheet.create({
  btntext:{
    fontFamily: "AvenirNext-Heavy",
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    right: 75
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 344,
    height: 73,
    borderRadius: 73,
    elevation: 3,
    backgroundColor: '#D5342B',
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  input:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 344,
    height: 73,
    borderRadius:50,
    elevation: 3,
    backgroundColor: '#FFF',
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 15,
  },
  headline4:{
    fontFamily: "AvenirNext-Heavy",
    fontSize: 34,
    color: "#000",
    margin: 10,
  },
  headline4INPUT:{
    fontFamily: "Helvetica",
    fontSize: 34,
    color: "grey",
    margin: 10,
  },
  headline4DATE:{
    fontFamily: "Helvetica",
    fontSize: 34,
    color: "#000",
    margin: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  headline2BLACK:{
    fontFamily: "Helvetica",
    fontSize: 61,
    color: "#000",
    margin: 10,
    fontWeight: 'bold',
  },
  card:{
      alignItems: 'center',
      justifyContent: 'center',
      width: 341,
      height: 177, 
      borderRadius: 30,
      elevation: 3,
      backgroundColor: '#D5342B',
      marginBottom: 25,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 10,
      elevation: 25,
      borderWidth: 2,
    borderColor: 'black',
  },
  rightContainer:{
    backgroundColor: '#96d0e3'
  },
  image: {
    position: 'absolute',
    top: 35,
    left: 200,
    right: 0,
    bottom: 0,
    shadowColor: '#FFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 25,
  }
})