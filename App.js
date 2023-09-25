import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import StackNav from './src/navigators/StackNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <StackNav />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
