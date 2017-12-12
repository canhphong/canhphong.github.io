import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component {
  onPress() {
    console.log('Area Press');
  }

  onPress2() {
    console.log('Press 2');
  }
  render() {
    return (<View>
      <View style={styles.myView}>
        <Text style={styles.myText}>Hello Phong</Text>
      </View>
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.v1}
          onPress={this.onPress}
        underlayColor="blue">
          <View>
            <Text>View 1</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity style={styles.v2} onPress={this.onPress}>
          <View>
            <Text>View 2</Text>
          </View>
        </TouchableOpacity>


        <View style={styles.v3}>
          <Text>View 3</Text>
        </View>
      </View>
    </View>);
      }
      }

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'blue'
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  }

});

AppRegistry.registerComponent('Component2', () => Component2);
