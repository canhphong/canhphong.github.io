import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		}
	}

// Function Signup - Create User with Email and Password
	Signup() {
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => {
					Alert.alert(
				  'Alert Title',
				  'Sign up Successful',
				  [
				    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				    {text: 'OK', onPress: () => this.props.goLogin()},
				  ],
				  { cancelable: false }
				)
					this.setState({
						email: '',
						password: ''
					})
		})
		.catch(function(error) {
				Alert.alert(
				  'Alert Title',
				  'Sign up Fail !',
				  [
				    {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
				    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
				    {text: 'OK', onPress: () => console.log('OK Pressed')},
				  ],
				  { cancelable: false }
				)
});
	}
	render() {
		return (
			<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
			<Text style={{color:'blue', fontSize: 40}}>Register</Text>
				<TextInput
			        style={{height: 40, width: 350, borderColor: 'gray', borderWidth: 1}}
			        onChangeText={(email) => this.setState({email})}
			        value={this.state.email} />
			    <TextInput
			        style={{height: 40, width: 350,borderColor: 'gray', borderWidth: 1}}
			        secureTextEntry={true}
			        onChangeText={(password) => this.setState({password})}
			        value={this.state.password} />

				   	<TouchableOpacity style={{backgroundColor:'green', padding:10}}
				   		onPress={() => {this.Signup()}}
				   		>
				    	<Text style={{color:'#fff'}}>Agree Signup</Text>
				    </TouchableOpacity>
			</View>
			);
	}
}