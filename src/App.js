import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Header } from './components/common';
import { COLORS } from './resources/constants';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import PropertyContainer from './components/property/PropertyContainer';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {

  render() {
    const { mainStyle, contentStyle } = styles;

    return (
      <Provider store={store}>
        <View style={mainStyle}>
          <Header title={'Property Finder'} />
          <View style={contentStyle}>
            <PropertyContainer />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
