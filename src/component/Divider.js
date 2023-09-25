import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../themes/ThemePath';

const Divider = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(0, 0, 102, 0.20);',
  },
});

export default Divider;
