import React, { Component } from 'react';
import {Platform, Text} from 'react-native';
// Todo: install: react-navigation
import { StackNavigator } from 'react-navigation';
import People from "./Components/people.js";
import screenA from "./Components/screenA.js";
import screenB from "./Components/screenB.js";
import screenC from "./Components/screenC.js";

export default class App extends Component<{}> {
  renderScene(route, navigator) {
    switch (route.name) {
      case "scA": return(
        <screenA/>
      )
      case "scB": return(
        <screenB/>
      )
      case "scC": return(
        <screenC/>
      )
    }
  }
  render() {
    return (
      <StackNavigator
        initialRoute={{name:"scB"}}
        renderScene = {this.renderScene}
      />
    );
  }
}
