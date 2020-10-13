import React from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Avatar, IconButton, Colors } from 'react-native-paper';

import Sherlock from '../assets/Sherlock.jpeg';
import CallsDescription from '../components/CallsDescription';

const Calls = () => {
  return (

    <View>
      <List.Item
        title="Sherlock Holmes"
        description="Today, 7:16 PM"
        left={props => 
          
          <Avatar.Image size={60} source={Sherlock} />
          
        }
        right={props => 
          <IconButton
            icon="phone"
            color='#7fbb00'
            size={28}
            onPress={() => console.log('Pressed')}
          /> 
        }
        onPress={()=>{ToastAndroid.show("Hello World", ToastAndroid.SHORT)}} 
      />

      <List.Item
        title="Sherlock Holmes"
        description="Today, 5:00 AM"
        left={props => 
          <Avatar.Image size={60} source={Sherlock} />
        }
        right={props => 
          <IconButton
            icon="video"
            color='#7fbb00'
            size={28}
            onPress={() => console.log('Pressed')}
          /> 
        }
        onPress={()=>{ToastAndroid.show("Hello World", ToastAndroid.SHORT)}}
      />
  
    </View>
  );
}

export default Calls;