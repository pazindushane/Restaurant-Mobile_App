import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Counter from "react-native-counters";


export default class FoodDesc2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked: false,
    };
  }
  onChange(number, type) {
    console.log(number, type) // 1, + or -
  }

  render() {
    const { checked } = this.state;
    return (
        <ScrollView   style={styles.container}>
        <View style={styles.scrollview}>
        <TouchableOpacity style={styles.btncart}><AwesomeIcon style={styles.txt8}  name="cart-plus"/></TouchableOpacity>
        {/* <ScrollView> */}
        <Image style={styles.tinylogo2}
          source={require('../../../../Assests/rice1.png')}></Image>
          <Text style={styles.txt1}>Fried Rice</Text>
          <Text style={styles.txt2}>Chicken,Egg,Vegy</Text>
          {/* <Checkbox
        checked={checked}
        onPress={() => { this.setState({ checked: !this.state.checked }); }}
      /> */}
      <View  style={styles.CategoryStyle}>
      <BouncyCheckbox 
      size={25}
      fillColor="#e1b12c"
      unfillColor="#FFFFFF"
      text="Small"
      iconStyle={{ borderColor: "#272C2F" }}
      textStyle={{ fontFamily: "JosefinSans-Regular" }}
      // onPress={(checked: boolean) => {}}
      />
      <BouncyCheckbox 
      size={25}
      fillColor="#e1b12c"
      unfillColor="#FFFFFF"
      text="Large"
      iconStyle={{ borderColor: "#272C2F" }}
      textStyle={{ fontFamily: "JosefinSans-Regular" }}
      // onPress={(checked: boolean) => {}}
      />
      </View>
      <View style={styles.counter}>
      <Counter size={2}  buttonStyle={{ borderColor: "black" }} buttonTextStyle	={{ color :"black"}} countTextStyle={{ color :"black" }} start={1} onChange={this.onChange.bind(this)} />
      </View>
      <Text style={styles.txt3}> + Add Something Extra *</Text>
      <View style={styles.extra}>
      <Image style={styles.tinylogo3}
          source={require('../../../../Assests/lava.jpg')}></Image><Text style={styles.txt4}>Lava Cake</Text>
          <Counter size={2}  buttonStyle={{ borderColor: "black" }} buttonTextStyle	={{ color :"black"}} countTextStyle={{ color :"black" }} start={1} onChange={this.onChange.bind(this)} />
          <Image style={styles.tinylogo4}
          source={require('../../../../Assests/cheese.jpg')}></Image><Text style={styles.txt5}>Cheese Balls</Text>
          <Counter size={2}  buttonStyle={{ borderColor: "black" }} buttonTextStyle	={{ color :"black"}} countTextStyle={{ color :"black" }} start={1} onChange={this.onChange.bind(this)} />
      </View>
      <View style={styles.btncart3}>
      <TouchableOpacity style={styles.btncart2}><AwesomeIcon style={styles.txt7}  name="cart-plus"/><Text style={styles.txt6}>Add To cart</Text></TouchableOpacity>
      </View>
          </View>
         
      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    
      // paddingTop: StatusBar.currentHeight,
      
    },
    scrollview:{
      // marginHorizontal: 20,
    },
    btncart:{
      width:50,
      height:50,
      alignSelf:'flex-end',
      backgroundColor:'#272C2F',
      borderRadius:10,
    },
    txt8:{
      fontSize:30,
      textAlign:'center',
      top:10,
      color:'#e1b12c'
      // textAlignVertical:'center',
      // textAlign:'auto'
    },
    tinylogo2:{
      width:200,
      height:200,
      alignSelf:'center',
      backgroundColor:'#272C2F',
      borderRadius:60,
    },
    txt1:{
      fontSize:30,
      top:20,
      alignSelf:'center',
      color:'#272C2F'
    },
    txt2:{
      fontSize:15,
      top:20,
      textAlign:'center'
    },
    CategoryStyle: {
      top:40,
      flexDirection:'row',
      justifyContent:'space-around' 
  },
  counter:{
    top:60,
    alignSelf:'center'
    
  },
  txt3:{
    top:80,
    textAlign:'center',
    color:'#272C2F',
    fontSize:20,
    backgroundColor:'#e1b12c',
    fontWeight:'bold'
  },
  tinylogo3:{
    width:50,
    height:50,
    borderRadius:10,
    // top:90,
    left:-10
  },
  tinylogo4:{
    width:50,
    height:50,
    borderRadius:10,
    top:9,
    left:-10
  },
  extra:{
    position:'relative',
    top:100,
    alignSelf:'center',
    paddingBottom:100
  },
  btncart2:{
    width:180,
    height:50,
    top:50,
    alignSelf:'center',
    backgroundColor:'#272C2F',
    borderRadius:10,
  },
  btncart3:{
    paddingBottom:100
  },
  txt4:{
    top:-39,
    fontSize:17,
    left:60
  },
  txt5:{
    top:-29,
    fontSize:17,
    left:60
  },
  txt6:{
    color:'#e1b12c',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    left:10,
    top:-9
  },
  txt7:{
    color:'#e1b12c',
    fontSize:20,
    left:10,
    top:13
  }
  
  })
