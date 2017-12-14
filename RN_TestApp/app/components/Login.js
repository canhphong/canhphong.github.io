import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {firebaseApp} from '../app/components/FirebaseConfig.js';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}
// Function sign in with email and password
	Signup() {
		firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
		 .then(() => {
				Alert.alert(
				  'Alert Title',
				  'Sign in Success:' + this.state.email,
				  [
				    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				    {text: 'OK', onPress: () => this.props.goWelcome()},
				  ],
				  { cancelable: false }
				)
				this.setState({
					email: '',
					password: ''
				});
		 })
		 .catch(function(error) {
		 			Alert.alert(
				  'Alert Title',
				  'Sign in Fail' + this.state.email,
				  [
				    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				    {text: 'OK', onPress: () => console.log('OK Pressed')},
				  ],
				  { cancelable: false }
				)
		 })
		});
	}

	render() {
		return (
			<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
				<Text style={{color:'blue', fontSize: 40}}>Login</Text>
				<TextInput
			        style={{width: 350, height: 40, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(email) => this.setState({email})}
			        value={this.state.email} />
			    <TextInput
			        style={{width: 350, height: 40, borderColor: 'gray', borderWidth: 1}}
			        secureTextEntry={true}
			        onChangeText={(password) => this.setState({password})}
			        value={this.state.password} />

			    <View style={{flexDirection:'row'}}>
				   	<TouchableOpacity style={{backgroundColor:'green', padding:10}}
				   		onPress={() => {this.Signup()}}
				   	>
				    	<Text style={{color:'#fff'}}>Login</Text>
				    </TouchableOpacity>
				    <TouchableOpacity 
				    	style={{backgroundColor:'red', padding:10}}
				    	onPress={() => {this.props.goRegister()}}
				    >
				    	<Text style={{color:'#fff'}}>Register</Text>
				    </TouchableOpacity>
				</View>
			</View>
			);
	}
}