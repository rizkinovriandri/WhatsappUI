import React from 'react';
import { View, Text, StyleSheet, Dimensions, ToastAndroid } from 'react-native';
import { List, Avatar } from 'react-native-paper';

import Sherlock from '../assets/Sherlock.jpeg'

const Status = () => {
  return (

    <View>
      <List.Item
        title="My Status"
        description="Tap to add status update"
        left={props => 
          <View>
            <Avatar.Image size={60} source={Sherlock} />
          
          </View>
        }
        
        onPress={()=>{ToastAndroid.show("Create New Status", ToastAndroid.SHORT)}} 
      />

      

<List.Section>
    <List.Subheader>Recent Update</List.Subheader>

          <List.Item
            title="Sherlock Holmes"
            description="10 minutes ago"
            left={props => 
              <Avatar.Image size={60} source={Sherlock} />
            }
            
            onPress={()=>{ToastAndroid.show("Status1", ToastAndroid.SHORT)}}
          />

          <List.Item
            title="Sherlock Holmes"
            description="10 minutes ago"
            left={props => 
              <Avatar.Image size={60} source={Sherlock} />
            }
            
            onPress={()=>{ToastAndroid.show("Status1", ToastAndroid.SHORT)}}
          />
      </List.Section>
    </View>
  );
}

export default Status;