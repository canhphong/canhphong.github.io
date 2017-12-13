import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Splash from './src/Splash';
import Main from './src/Main';

// export default class MyApp extends Component {
//   render() {
//     return (
//         <View>
//           <Splash />
//         </View>
//     )
//   }
// }


// AppRegistry.registerComponent('MyApp', () => MyApp );

const Navigation = StackNavigator({
  Home: {
    screen: Splash,
  },
  main: {
    screen: Main,
  }
})

export default Navigation;