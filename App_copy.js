/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Appbar } from 'react-native-paper';


const App = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header 
      style={{ 
        backgroundColor: '#0088cc', 
        paddingLeft: 20
        }}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="ChatUp" subtitle="Welcome" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};


export default App;
