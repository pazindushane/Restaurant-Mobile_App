import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, SafeAreaView, StatusBar  } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Image
          style={styles.tinyLogo}
          source={require('../../../Assests/avatar.jpg')}
        />
        </TouchableOpacity>
        <Text style={styles.txt1}>Let's eat</Text>
        <Text style={styles.txt2}>Tasty Foods</Text>
        <Text style={styles.txt3}>Categories</Text>
        <Text style={styles.txt3}></Text>
      <ScrollView>
        <View style={styles.card1}/> 
        <Image
          style={styles.tinylogo2}
          source={require('../../../Assests/kottu.png')}
        />
        <Text style={styles.txt4}>Kottu</Text>
        <View style={styles.CategoryStyle}>
          <Card style={styles.card2}>
          <Image
          style={styles.tinylogo3}
          source={require('../../../Assests/kottu.png')}
        />
        <Text style={styles.txt5}>Chicken Kottu</Text>
        <Text style={styles.txt5}>Rs.350.00</Text>
        <Text style={styles.txt6}>4.3  <AwesomeIcon style={styles.txt7}  name="star"/></Text>
        <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.txt8}  name="cart-plus"/></TouchableOpacity>
          </Card>
          <Card style={styles.card3}>
          <Image
          style={styles.tinylogo3}
          source={require('../../../Assests/kottu2.png')}
        />
        <Text style={styles.txt5}>Egg Kottu</Text>
        <Text style={styles.txt5}>Rs.250.00</Text>
        <Text style={styles.txt6}>4.5  <AwesomeIcon style={styles.txt7}  name="star"/>
        </Text>
        <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.txt8}  name="cart-plus"/></TouchableOpacity>
          </Card>
        </View>
        <View style={styles.card11}/> 
        <Image
          style={styles.tinylogo2}
          source={require('../../../Assests/rice1.png')}
        />
        <Text style={styles.txt4}>Fried Rice</Text>
        <View style={styles.CategoryStyle}>
          <Card style={styles.card2}>
          <Image
          style={styles.tinylogo3}
          source={require('../../../Assests/rice1.png')}
        />
        <Text style={styles.txt5}>Chicken Rice</Text>
        <Text style={styles.txt5}>Rs.350.00</Text>
        <Text style={styles.txt6}>4.3  <AwesomeIcon style={styles.txt7}  name="star"/></Text>
        <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.txt8}  name="cart-plus"/></TouchableOpacity>
          </Card>
          <Card style={styles.card3}>
          <Image
          style={styles.tinylogo3}
          source={require('../../../Assests/rice2.png')}
        />
        <Text style={styles.txt5}>Egg Rice</Text>
        <Text style={styles.txt5}>Rs.250.00</Text>
        <Text style={styles.txt6}>4.5  <AwesomeIcon style={styles.txt7}  name="star"/>
        </Text>
        <TouchableOpacity style={styles.btn2}><AwesomeIcon style={styles.txt8}  name="cart-plus"/></TouchableOpacity>
          </Card>
        </View>
        {/* </View> */}
        
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  tinyLogo:{
    width:50,
    height:50,
    alignSelf:'flex-end',
    left:-10,
    top:10
  },
  txt1:{
    fontSize:28,
    color:'#272C2F',
    fontWeight:'bold',
    left:10,
    top:10
  },
  txt2:{
    fontSize:28,
    color:'#e1b12c',
    fontWeight:'bold',
    left:10,
    top:10
  },
  txt3:{
    fontSize:20,
    color:'#272C2F',
    fontWeight:'bold',
    left:10,
    top:30
  },
  txt4:{
    fontSize:16,
    color:'#272C2F',
    fontWeight:'bold',
    left:65,
    top:-38
  },
  card1:{
    width:104,
    height:53,
    backgroundColor:'#e1b12c',
    borderRadius:30,
    top:40,
    left:10
  },
  tinylogo2:{
    width:40,
    height:40,
    alignSelf:'flex-end',
    right:300,
    top:-6
  },
  CategoryStyle: {
    flexDirection:'row',
     
},
card2:{
  width:142,
  height:232,
  backgroundColor:'black',
  left:10
},
card3:{
  width:142,
  height:232,
  backgroundColor:'black',
  left:50
},
tinylogo3:{
  width:100,
  height:100,
  alignSelf:'flex-end',
  left:-21,
  top:15
},
txt5:{
  fontSize:18,
  color:'white',
  fontWeight:'bold',
  left:10,
  top:30
},
txt6:{
  fontSize:15,
  color:'white',
  fontWeight:'bold',
  left:10,
  top:55
},
txt7:{
  fontSize:15,
  color:'#e1b12c',
  fontWeight:'bold',
  left:10,
  top:40
},
btn2:{
  backgroundColor:'#F5DC97',
  width:65,
  height:40,
  top:15,
  left:68,
  borderRadius:10
},
txt8:{
  color:'#495041',
  fontSize:40,
  left:10
},
card11:{
  width:144,
  height:53,
  backgroundColor:'#e1b12c',
  borderRadius:30,
  top:40,
  left:10
},
})
