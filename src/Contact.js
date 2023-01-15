import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const ContactScreen = () => {
   return (
      <View style={styles.container}>
         <View style={styles.emailBox}>
            <Text style={styles.emailTitle}>Email :</Text>
            <Text style={styles.emailContent}>healthify@gmail.com</Text>
         </View>
      </View>
   );
 }

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center'
   },
   emailBox: {
      width:300, 
      alignItems:'center', 
      bottom:90
   }, 
   emailTitle: {
      fontWeight:'800', 
      fontSize:26, 
      color:'black'
   },
   emailContent: {
      fontWeight:'400', 
      fontSize:26, 
      color:'black', 
      top: 30
   },
})