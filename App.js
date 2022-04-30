import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Alert, TouchableOpacity, Image, Text } from 'react-native';

export default class ButtonBasics extends Component {
  fantasticButton() {
    Alert.alert('You are feeling', 'Fantastic', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  niceButton() {
    Alert.alert('You are feeling:', 'Nice', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  sorryButton() {
    Alert.alert('Your mood is:', 'Sorry', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  forgiveButton() {
    Alert.alert('Alert!', 'Forgive us.', [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Click on an emoji that decribes how you are </Text> 
        <View style={styles.buttonContainer}>              
        <TouchableOpacity style={styles.button} onPress={this.fantasticButton}>
          <Image source={require('./assets/fantastic.png')} style={styles.imageStyle}/>            
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.niceButton}>
          <Image source={require('./assets/nice.png')} style={styles.imageStyle}/>            
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.sorryButton}>
          <Image source={require('./assets/sorry.png')} style={styles.imageStyle}/>           
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.forgiveButton}>
          <Image source={require('./assets/forgive.png')} style={styles.imageStyle}/>            
        </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',   
    justifyContent: 'center',
    alignItems: 'center', 
    flex: 3   
  },
  buttonContainer: {
    flexDirection: 'row'    
  },  
  imageStyle: {
    width: 50,
    height: 50
  },
  button:{
    margin:10,
    justifyContent: 'center'        
  }, 
  text:{
    textAlign:"center"
  }
});
