/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Chats from './pages/Chats';
import Status from './pages/Status';
import Calls from './pages/Calls';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <Chats/>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <Status/>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: 'white' }]}>
    <Calls/>
</View>
);

const initialLayout = { width: Dimensions.get('window').width };


const App = () => {

  const _handleSearch = () => console.log('Searching');
  const _handleMore = () => console.log('Shown more');

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Chat' },
    { key: 'second', title: 'Status' },
    { key: 'third', title: 'Calls' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#ffc20e' }}
      style={{ backgroundColor: '#0c3866' }}
    />
  );

  return (
    <>
    <Appbar.Header 
      style={{ 
        backgroundColor: '#0c3866', 
        color: "white",
        paddingLeft: 20
        }}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title="ChatUp" subtitle="Welcome" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>

    <TabView
      style={{ 
      backgroundColor: '#0088cc', 
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
    />
    </>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    
  },
});

export default App;
