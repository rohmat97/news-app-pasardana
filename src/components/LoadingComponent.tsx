import React from 'react';
import { View, Text, ActivityIndicator, useWindowDimensions, StyleSheet } from 'react-native';

const LoadingComponent = () => {
  return (
    <View style={[styles.container, { marginVertical: useWindowDimensions().height * 0.25, }]}>
      <ActivityIndicator size={60} />
      <Text style={styles.text}>Please wait for a moment . . .</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default LoadingComponent;
