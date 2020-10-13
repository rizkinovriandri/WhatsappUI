import React from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Avatar, Badge } from 'react-native-paper';

import Sherlock from '../assets/Sherlock.jpeg'



const Chats = () => {

  return (

    <View>
      <List.Item
        title="First Item"
        description="Item description"
        left={props => 
          
          <Avatar.Image size={60} source={Sherlock} />
          
        }
        right={props => 
          <Text>10.00 AM</Text> 
        }
        onPress={()=>{ToastAndroid.show("Hello World", ToastAndroid.SHORT)}} 
      />

      <List.Item
        title="First Item"
        description="Item description"
        left={props => 
          <Avatar.Image size={60} source={Sherlock} />
        }
        right={props => 
          <View>
            <Text 
              style={{ 
                fontSize: 13,
                marginBottom: 8
              }}
            >10.00 AM</Text>
            <Badge
                style={{ 
                fontSize: 11,
                backgroundColor:'#7fbb00',
                color:'white',
                
              }}
            >2</Badge>
          </View>
        }
        onPress={()=>{ToastAndroid.show("Hello World", ToastAndroid.SHORT)}}
      />
  
    </View>
  );
}

export default Chats;