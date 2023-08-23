/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {AppNavigation} from './src/navigation';
import {AppProvider} from './src/store';

function App(): JSX.Element {
  return (
    <AppProvider>
      <StatusBar barStyle={'default'} />
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight && -StatusBar?.currentHeight,
  },
});

export default App;
