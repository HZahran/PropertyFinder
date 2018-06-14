import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Header } from './components/common/Header';



export default class App extends Component {

  render() {
    const { mainStyle, contentStyle } = styles;

    return (
      <Provider store={createStore}>
        <View style={mainStyle}>
          <Header title={'Property Finder'} />
          <View style={contentStyle}>
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
