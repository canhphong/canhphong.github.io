import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Slide from './swiper/Slider.js';

class App extends Component {
  render() {
    return (
        <View style={[{flex:1}, styles.container]}>
          <Slide>
          <App />
        </View>
    )
  }
}


// CSS for Swiper
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  }

export default App
