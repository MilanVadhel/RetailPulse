import React, {PropsWithChildren} from 'react';
import {horizontalScale} from '@app/utils/dimension';
import {StatusBar, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Theme} from '@app/utils';

type BaseLayoutProps = PropsWithChildren & {
  style?: StyleProp<ViewStyle>;
  spacing?: 'spacing' | 'none';
};

export const BaseLayout = React.memo(
  ({children, style, spacing = 'spacing'}: BaseLayoutProps) => {
    return (
      <SafeAreaView style={styles.mainContianer}>
        <StatusBar animated backgroundColor={Theme.common.colorPrimaryDark} />
        <View
          style={[
            styles.innerContainer,
            style,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              paddingHorizontal:
                spacing === 'spacing' ? horizontalScale(16) : 0,
            },
          ]}>
          {children}
        </View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  mainContianer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});
