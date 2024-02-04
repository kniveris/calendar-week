import React from 'react';
import { View, StyleSheet } from 'react-native';

const GraySeparator = ({ width = '95%' }) => {
  return (
    <View style={[styles.separator, { width }]}></View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1, // Adjust the height as needed
    backgroundColor: '#dbdbdb',
    marginVertical: 10, // Adjust the vertical margin as needed
  },
});

export default GraySeparator;
