/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './store'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c1d82f',
    accent: '#f1c40f',
  },
};

export default function Main() {
  return (
    <Provider store={store}>
        <PaperProvider theme={theme}>
          <App />
        </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
