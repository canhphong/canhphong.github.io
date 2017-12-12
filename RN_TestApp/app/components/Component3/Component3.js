import React, {Component} from 'react';
import {AppRegistry,Text,View, TextInput} from 'react-native';

export default class Component3 extends Component {

constructor() {
  super();
  this.state = {
    textValue:'Hello',
    switchValue: false
  }
}


onChangeText(value) {
  this.setState({
    textValue:value
  });
}

onSubmit() {
  console.log('Input Submited...');
}

onSwitchChange() {
  this.setState({
    switchValue:value
  });
}

  render() {
    return (
      <View>
        <TextInput
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        {/* <Switch
          value={this.state.switchValue}
          onChange={(value) => this.onSwitchChange(value)}
        /> */}
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', () => Component3);
