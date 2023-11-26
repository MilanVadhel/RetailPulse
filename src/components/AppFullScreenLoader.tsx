import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppLoader} from './AppLoader';

export const AppFullScreenLoader: React.FC = React.memo(() => {
  return (
    <View style={styles.mainContainer}>
      <AppLoader />
    </View>
  );
});

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
