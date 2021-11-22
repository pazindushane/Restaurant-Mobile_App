import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import SignUpScreen from './SignUpScreen';

export default class LoginScreen extends Component {

  SignScreenNav =()=> {
    this.props.navigation.navigate(SignUpScreen)
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.bgclr} behavior='position'  enabled={true}>
        <Image
        style={styles.img3}
        source={require('../../Assests/coverimg.png')}
      />
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <Text style={styles.titleText}>Sign In With</Text>
      <Button style={styles.btn1} icon="google" mode="contained" onPress={() => console.log('Pressed')}>
    <Text style={styles.txt1}>Google</Text>
    </Button>
    <Button style={styles.btn2} icon="facebook" mode="contained" onPress={() => console.log('Pressed')}>
    <Text style={styles.txt1}>Facebook</Text>
    </Button>
    <Text style={styles.txt2}>- - - - - - - - - -   or   - - - - - - - - - -</Text>
    <Text style={styles.txt6}>Username</Text>
    <TextInput style={styles.txt3}
      
      label="User Name"
      placeholder="Username"
      
    />
    <Text style={styles.txt7}>Password</Text>
    <TextInput style={styles.txt4}
      secureTextEntry
      label="Password"
      placeholder="Password"
      
    />
    <Button style={styles.btn11} mode="contained" onPress={this.LoginScreenNav}>
          <Text style={styles.btn21}>Sign In</Text>
        </Button>
        <Text style={styles.txt8}>Don't have an account ? <TouchableOpacity
          
          onPress={this.SignScreenNav}
        ><Text style={styles.btn3}>Register now</Text></TouchableOpacity> </Text>
         {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  bgclr:{
    flex:1,
    backgroundColor : '#272C2F'
  },
  img3:{
    position:'absolute',
    top:-90,
    left:130,
    opacity:0.6
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color:'white',
    textAlign:'center',
    top:90
  },
  btn1:{
    width:160,
    height:70,
    backgroundColor:'#424242',
    // color:'black'
    borderRadius: 50,
    paddingVertical: 13,
    top:110,
    left:10
  },
  btn2:{
    width:160,
    height:70,
    backgroundColor:'#424242',
    borderRadius: 50,
    paddingVertical: 13,
    top:40,
    left:190
  },
  txt1:{
    fontSize:20,
  },
  txt2:{
    fontSize:17,
    color:'white',
    top:60,
    textAlign:'center',
  },
  txt3:{
    color:'white',
    backgroundColor:'#424242',
    width:300,
    top:80,
    alignSelf:'center',
    borderRadius: 10,
  },
  txt4:{
    color:'white',
    backgroundColor:'#424242',
    width:300,
    top:100,
    alignSelf:'center',
    borderRadius: 10,
  },
  txt6:{
    color:'white',
    top:70,
    left:20,
    fontSize:18
  },
  txt7:{
    color:'white',
    top:90,
    left:20,
    fontSize:18
  },
  btn11:{
    backgroundColor:'#FFC013',
    alignSelf:'center',
    width:300,
    top:150,
    borderRadius:10,
    height:40
  },
  btn21:{
    color:'#272C2F'
  },
  txt8:{
    color:'white',
    top:180,
    left:60
  },
  btn3:{
    color:'#FFC013',
    top:5
  }
})
