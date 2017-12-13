import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default class Splash extends Component {
	render() {
		return(
			<View style={styles.wrapper}>
				<View style={styles.titleWrapper}>
					<Text style={styles.title}>Hello Splash</Text>
				</View>
				<View>
					<Text style={styles.subtitle}>Powered by React Native</Text>
				</View>
			</View>
			);
	}
}


const styles = StyleSheet.create ({
	wrapper: {
		backgroundColor: 'red', 
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		color: 'white',
		fontSize: 30,
		fontWeight: 'bold'
		paddingBottom: 20 
	},
	subtitle: {
		color: 'white',
		fontSize: 10,
	},
	titleWrapper: {
		justifyContent: 'center',
		flex: 1
	}
});

