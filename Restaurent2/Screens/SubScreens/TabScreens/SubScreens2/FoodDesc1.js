import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Checkbox } from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Counter from "react-native-counters";


export default class FoodDesc1 extends Component {
  
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
          source={require('../../../../Assests/kottu.png')}></Image>
          <Text style={styles.txt1}>Kottu</Text>
          <Text style={styles.txt2}>Chicken,Egg,Vegy</Text>
          {/* <Checkbox
        checked={checked}
        onPress={() => { this.setState({ checked: !this.state.checked }); }}
      /> */}
      <View  style={styles.CategoryStyle}>
      <BouncyCheckbox 
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      text="Small"
      iconStyle={{ borderColor: "red" }}
      textStyle={{ fontFamily: "JosefinSans-Regular" }}
      // onPress={(checked: boolean) => {}}
      />
      <BouncyCheckbox 
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      text="Large"
      iconStyle={{ borderColor: "red" }}
      textStyle={{ fontFamily: "JosefinSans-Regular" }}
      // onPress={(checked: boolean) => {}}
      />
      </View>
      <View style={styles.counter}>
      <Counter size={2}  buttonStyle={{ borderColor: "black" }} buttonTextStyle	={{ color :"black"}} countTextStyle={{ color :"black" }} start={1} onChange={this.onChange.bind(this)} />
      </View>
      <Text style={styles.txt3}>Add Something Extra</Text>
      <View style={styles.extra}>
      <Image style={styles.tinylogo3}
          source={require('../../../../Assests/lava.jpg')}></Image>
          <Counter size={2}  buttonStyle={{ borderColor: "black" }} buttonTextStyle	={{ color :"black"}} countTextStyle={{ color :"black" }} start={1} onChange={this.onChange.bind(this)} />
          <Image style={styles.tinylogo3}
          source={require('../../../../Assests/cheese.jpg')}></Image>
          <Counter size={2}  buttonStyle={{ borderColor: "black" }} buttonTextStyle	={{ color :"black"}} countTextStyle={{ color :"black" }} start={1} onChange={this.onChange.bind(this)} />
      </View>
      {/* <TouchableOpacity style={styles.btncart2}><AwesomeIcon style={styles.txt8}  name="cart-plus"/></TouchableOpacity> */}
       
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
    backgroundColor:'red'
  },
  txt8:{
    fontSize:15,
    textAlign:'center',
    top:15
    // textAlignVertical:'center',
    // textAlign:'auto'
  },
  tinylogo2:{
    width:200,
    height:200,
    alignSelf:'center'
  },
  txt1:{
    fontSize:30,
    top:20,
    alignSelf:'center'
  
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
  textAlign:'center'
},
tinylogo3:{
  width:50,
  height:50,
  borderRadius:10,
  // top:90,
  left:-100
},
extra:{
  position:'relative',
  top:100,
  alignSelf:'center',
  paddingBottom:140
},
btncart2:{
  width:50,
  height:50,
  top:50,
  alignSelf:'center',
  backgroundColor:'red'
},

})
