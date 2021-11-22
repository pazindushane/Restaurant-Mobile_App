import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Button } from 'react-native-paper';
import LoginScreen from './LoginScreen'

export default class StartScreen extends Component {
  LoginScreenNav =()=> {
    this.props.navigation.navigate(LoginScreen)
  }
  render() {
    return (
      <View style={styles.bgclr}>
        <View style={styles.bgclr2}>
        <Image
        style={styles.img3}
        source={require('../../Assests/coverimg.png')}
      />
        <Image
        style={styles.img1}
        source={require('../../Assests/logoimg.png')}
      />
      <Image
        style={styles.img2}
        source={require('../../Assests/chefimg.png')}
      />
        </View>
        <View style={styles.bgclr3}>
        <Text style={styles.titleText}>Order and Let's Eat Tasty <Text style={styles.txt1}>Foods</Text> </Text>
        <Text style={styles.descText}>Order and Let's Eat Tasty Foods</Text>
        <Button style={styles.btn1} mode="contained" onPress={this.LoginScreenNav}>
          <Text style={styles.btn2}>Order Now</Text>
        </Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bgclr:{
    flex:1,
    backgroundColor : '#FFC013' 
  },
  bgclr2:{
    flex:3,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor : '#FFC013',
    width:360,
    height:240,
  },
  bgclr3:{
    flex:2,
    backgroundColor: '#272C2F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  img1:{
    position:'absolute',
    width: 109,
    height: 152,
    left:220,
    top:104
  },
  img2:{
    width: 380,
    height: 352,
    top:9,
    left:25
  },
  img3:{
    position:'absolute',
    top:0,
    opacity:0.6
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color:'white',
    textAlign:'center',
    top:40
  },
  descText: {
    fontSize: 16,
    color:'white',
    textAlign:'center',
    top:45
  },
  btn1:{
    backgroundColor:'#FFC013',
    alignSelf:'center',
    width:300,
    top:80,
    borderRadius:10,
    height:40
  },
  btn2:{
    color:'#272C2F'
  },
  txt1:{
    color:'#FFC013'
  }

})