import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';

import Swiper from 'react-native-swiper'

const {width} = Dimensions('window')

const Slider = props => (
  <View style={styles.container}>
    <Image style={styles.image} source={props.uri}>

    </Image>
  </View>
)



export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesSlider: [
        require('../images/1.jpg'),
        require('../images/2.jpg'),
        require('../images/3.jpg'),
      ]
    }
  }

  render(){
    return {
      <View>
        <Swiper
          autoplay
          height={240}>
          {
            this.state.imagesSlider.map(item, i) => <Slide
              uri={item}
              key={i} />
          }
        </Swiper>
      </View>
    }
  }

// CSS for Swiper
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    image: {
      flex: 1,
    }
  }
}
