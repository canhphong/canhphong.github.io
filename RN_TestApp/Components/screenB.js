import React, {Component} from "react";
import {View, Text} from "react-native";

export default class screenB extends Component {
  render(){
    return(
      <View style={{flex:1, backgroundColor:"yellow"}}>
        <Text style={{font:100, color:white}}>B</Text>
      </View>
    )
  }
}
