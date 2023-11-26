import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';

export const KeyboardAwareView = React.memo(({children}: PropsWithChildren) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
      {children}
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});
