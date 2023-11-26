import React from 'react';
import {FontWeight} from '@app/types';
import {Theme, getFontFamily, horizontalScale, scaledSize} from '@app/utils';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';

export const AppInput = React.forwardRef(
  (
    {
      fontWeight = 'normal',
      placeHolderText,
      style,
      keyboardType,
      ...rest
    }: {
      fontWeight?: FontWeight;
      placeHolderText?: string;
      style?: StyleProp<TextStyle>;
      keyboardType: KeyboardTypeOptions;
    } & TextInputProps,
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
        cursorColor={Theme.common.inputCursorColor}
        placeholder={placeHolderText}
        placeholderTextColor={Theme.common.inputPlaceHolderColor}
        returnKeyType="done"
        multiline={false}
        keyboardType={keyboardType}
        style={[
          styles.input,
          {
            fontFamily: getFontFamily(fontWeight),
          },
          style,
        ]}
        {...rest}
      />
    );
  },
);

const styles = StyleSheet.create({
  input: {
    includeFontPadding: false,
    color: Theme.common.textColor,
    borderColor: Theme.common.inputFieldBorderColor,
    borderWidth: scaledSize(2),
    borderRadius: scaledSize(8),
    paddingStart: horizontalScale(16),
    paddingEnd: horizontalScale(12),
    fontSize: scaledSize(20),
    width: '100%',
    height: 52,
  },
});
