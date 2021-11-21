import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Container, Content, NativeBaseProvider } from 'native-base';

export default class StartScreen extends Component {
  render() {
    return (
      // <NativeBaseProvider>
      <View style={styles.bgclr}>
        <View style={styles.bgclr2}></View>
        <View style={styles.bgclr3}></View>
      </View>
        /* <Content style={styles.bgclr2}></Content> */
      // 
      // </NativeBaseProvider>
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
    // backgroundColor: '#272C2F',
    backgroundColor : '#FFC013',
    width:360,
    height:240,
    // borderTopLeftRadius:5
    
  },
  bgclr3:{
    flex:2,
    // backgroundColor : '#FFC013' 
    backgroundColor: '#272C2F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
})