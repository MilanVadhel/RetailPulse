import {FontWeight} from '@app/types';
import {Theme, getFontFamily, scaledSize} from '@app/utils';
import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextProps, TextStyle} from 'react-native';

type AppTextProps = {
  fontWeight?: FontWeight;
  style?: StyleProp<TextStyle>;
};

export const AppText = React.memo(
  ({
    children,
    fontWeight = 'normal',
    style,
    ...rest
  }: PropsWithChildren<AppTextProps & TextProps>) => {
    return (
      <Text
        style={[styles.text, {fontFamily: getFontFamily(fontWeight)}, style]}
        {...rest}>
        {children}
      </Text>
    );
  },
);

const styles = StyleSheet.create({
  text: {
    fontSize: scaledSize(16),
    color: Theme.common.textColor,
  },
});
