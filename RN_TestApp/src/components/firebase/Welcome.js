import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Welcome extends Component {
	render() {
		return(
			<View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
				<Text style={{color: white, fontSize: 40}}>Welcome Login !!!</Text>
			</View>
			);
	}
}