import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, IconButton } from 'react-native-paper';

const CallsDescription = () => {
  return (
    <View>
        <IconButton
          icon="camera"
          color={Colors.red500}
          size={20}
          onPress={() => console.log('Pressed')}
        />
    </View>
  );
}

export default CallsDescription;