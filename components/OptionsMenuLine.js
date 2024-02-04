import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OptionsMenuLine = ({ text, item }) => {
  return (
    <View style={styles.horizontalMenu}>
      <Text style={styles.menuText}>{text}</Text>
      <View style={styles.menuItem}>{item}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 2,
    paddingHorizontal: 20,
    // borderWidth: 1,
    // borderColor: 'black',
  },

  menuText: {
    // Add your styles for menuText here
  },

  menuItem: {
    // Add your styles for menuItem here
  },
});

export default OptionsMenuLine;
