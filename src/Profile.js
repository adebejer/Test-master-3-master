import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {firebase} from '../config'
import React, {useState, useEffect} from 'react'



const ProfileScreen = () => {

   const [name, setName] = useState('')

   useEffect(() => {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if(snapshot.exists){
          setName(snapshot.data())
        }
        else{
          console.log('User does not exist')
        }
      })
    }, [])

   return (
      <View style={styles.container}>
         <View style={styles.infoBox}>
            <Text style={styles.name}>{name.firstName}</Text>
            <Text style={styles.email}>{name.email}</Text>
         </View>
         <View onPress={() =>{}} style={styles.passwordBox}>
            <Text style={styles.password}>Change Password</Text>
         </View>
         <View onPress={() =>{}} style={styles.deleteBox}>
            <Text style={styles.delete}>Delete Account</Text>
         </View>
      </View>
   );
 }

export {ProfileScreen} 

const styles = StyleSheet.create({
   container: { 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center' 
   },
   infoBox: {
      width:300, 
      height:100, 
      alignItems:'center', 
      bottom:100, 
      borderBottomColor:'black', 
      borderBottomWidth:2
   },
   name: {
      fontWeight:'bold', 
      fontSize:25
   },
   email: {
      fontSize: 20, 
      top:10
   },
   passwordBox: {
      width:245, 
      height:40, 
      alignItems:'center', 
      borderBottomColor:'#4c4c4c', 
      borderBottomWidth:2, 
      bottom:60
   }, 
   password: {
      fontWeight:'600', 
      fontSize:26, 
      color:'#4c4c4c'
   },
   iconBox: {
      width:170, 
      height:40, 
      alignItems:'center', 
      borderBottomColor:'#4c4c4c', 
      borderBottomWidth:2, 
      bottom:40
   },
   icon: {
      fontWeight:'600', 
      fontSize:26, 
      color:'#4c4c4c'
   },
   deleteBox: {
      width:150, 
      height:30, 
      alignItems:'center', 
      borderBottomColor:'#d5342b', 
      borderBottomWidth:2, 
      bottom:10
   },
   delete: {
      fontWeight:'500', 
      fontSize:20, 
      color:'#d5342b'
   },
})