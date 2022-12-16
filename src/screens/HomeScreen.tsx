import React from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollProgressMenu from 'components/ScrollProgressMenu';

const HomeScreen = () => (
  <View style={styles.container}>
    <ScrollProgressMenu />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
