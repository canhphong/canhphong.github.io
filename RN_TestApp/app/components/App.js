import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Login from '../app/components/Login.js';
import Register from '../app/components/Register.js';
import Welcome from '../app/components/Welcome.js';

export default class App extends Component {
	renderScene(route, navigator) {
		switch(route.name) {
			case 'login':return(
				<Login 
					goRegister={() => {
						navigator.push({name:'register'})
					}}
					goWelcome={() => {
						navigator.push({name:'welcome'})
					}}
				/>
				);
			case 'register':return(
				<Register />
					goLogin={ () => {
						navigator.push({name:'login'})
					}}
				);
			case 'Welcome':return(
				<Welcome />

				)
		}
	}

	render() {
		return (
			<Navigator 
				initialRoute={{name:'login'}}
				renderScene={this.renderScene}
			/>
			);
	}
}