import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MarketplaceApp from './src/MarketplaceApp'

export default function App() {
  return (
    <View style={styles.container}>
      <MarketplaceApp/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
