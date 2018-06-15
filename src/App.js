import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Header } from './components/common';
import { COLORS } from './resources/constants';
import { PropertyList } from './components/property/PropertyList';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import mockData from '../__mocks__/property-list.json'

export default class App extends Component {

  render() {
    const { mainStyle, contentStyle } = styles;

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={mainStyle}>
          <Header title={'Property Finder'} />
          <View style={contentStyle}>
            <PropertyList data={mockData} />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    backgroundColor: COLORS.MEDIUM_BLUE,
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
