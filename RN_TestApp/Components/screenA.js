import React, {Component} from "react";
import {View, Text} from "react-native";

export default class screenA extends Component {
  render(){
    return(
      <View style={{flex:1, backgroundColor:"blue"}}>
        <Text style={{font:100, color:white}}>A</Text>
      </View>
    )
  }
}
