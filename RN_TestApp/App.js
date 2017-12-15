import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';


export default class MyApp extends Component {
  render() {
    return (
        <View>
          <App />
        </View>
    )
  }
}


// const Navigation = StackNavigator({
//   Home: {
//     screen: Splash,
//   },
//   main: {
//     screen: Main,
//   }
// })

// export default Navigation;
