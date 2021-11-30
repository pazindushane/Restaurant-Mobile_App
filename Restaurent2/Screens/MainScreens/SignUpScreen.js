import React, { Component }  from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-paper';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { saveuser } from '../../Redux/Actions/userActions';

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      email:'',
      contact:''
    };
  }

  saveUsers = () => {

    const {username, password, email, contact } = this.state;

    const infosaveuser = { username, password, email, contact};

    this.props.saveuser(infosaveuser);

  }

  LoginScreenNav =()=> {
    this.props.navigation.navigate(LoginScreen)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.bgclr} behavior='position'  enabled={true}>
        <Image
        style={styles.img3}
        source={require('../../Assests/coverimg.png')}
      />
        <Text style={styles.titleText}>Sign Up</Text>
        <Text style={styles.txt7}>Username</Text>
          <TextInput style={styles.txt4}
            
            label="Username"
            placeholder="Username"
            value={this.state.username}
            name="value"
            onChangeText={(value) => {                 
						this.setState({
              username: value
                          })
            }}
      
          />
          
        <Text style={styles.txt71}>Password</Text>
          <TextInput style={styles.txt41}
            secureTextEntry
            label="Password"
            placeholder="Password"
            value={this.state.password}
            name="value"
            onChangeText={(value) => {                 
						this.setState({
              password: value
                          })
            }}
      
          />
          <Text style={styles.txt72}>Email</Text>
          <TextInput style={styles.txt42}
            
            label="Email"
            placeholder="Email"
            value={this.state.email}
            name="value"
            onChangeText={(value) => {                 
						this.setState({
              email: value
                          })
            }}
      
          />
          <Text style={styles.txt73}>Contact</Text>
          <TextInput style={styles.txt43}
            
            label="Contact"
            placeholder="Contact"
            value={this.state.contact}
            name="value"
            onChangeText={(value) => {                 
						this.setState({
              contact: value
                          })
            }}
      
          />
          <Button style={styles.btn11} mode="contained" onPress={() => this.saveUsers()}>
          <Text style={styles.btn21}>Sign Up</Text>
          </Button>
          <Text style={styles.txt8}>Already have an account ? <TouchableOpacity
          
          onPress={this.LoginScreenNav}
          ><Text style={styles.btn3}>Login here</Text></TouchableOpacity> </Text>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users
});

export default connect( mapStateToProps, {saveuser})(SignUpScreen);

const styles = StyleSheet.create({
  img3:{
    position:'absolute',
    top:-70,
    left:210,
    opacity:0.6
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color:'white',
    textAlign:'center',
    top:50
  },
  bgclr:{
    flex:1,
    backgroundColor : '#272C2F',
  },
  txt4:{
    color:'white',
    backgroundColor:'#424242',
    width:300,
    top:100,
    alignSelf:'center',
    borderRadius: 10,
  },
  txt7:{
    color:'white',
    top:90,
    left:20,
    fontSize:18
  },
  txt41:{
    color:'white',
    backgroundColor:'#424242',
    width:300,
    top:120,
    alignSelf:'center',
    borderRadius: 10,
  },
  txt71:{
    color:'white',
    top:110,
    left:20,
    fontSize:18
  },
  txt42:{
    color:'white',
    backgroundColor:'#424242',
    width:300,
    top:140,
    alignSelf:'center',
    borderRadius: 10,
  },
  txt72:{
    color:'white',
    top:130,
    left:20,
    fontSize:18
  },
  txt43:{
    color:'white',
    backgroundColor:'#424242',
    width:300,
    top:160,
    alignSelf:'center',
    borderRadius: 10,
  },
  txt73:{
    color:'white',
    top:150,
    left:20,
    fontSize:18
  },
  btn11:{
    backgroundColor:'#FFC013',
    alignSelf:'center',
    width:300,
    top:190,
    borderRadius:10,
    height:40
  },
  btn21:{
    color:'#272C2F'
  },
  txt8:{
    color:'white',
    top:200,
    left:60
  },
  btn3:{
    color:'#FFC013',
    top:5
  }
})
