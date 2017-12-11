import React, {Component} from "react";
import {View, Text} from "react-native";

export default class screenC extends Component {
  render(){
    return(
      <View style={{flex:1, backgroundColor:"red"}}>
        <Text style={{font:100, color:white}}>C</Text>
      </View>
    )
  }
}
