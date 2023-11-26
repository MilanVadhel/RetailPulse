import {Theme, horizontalScale, scaledSize} from '@app/utils';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {AppText} from './AppText';
import {FontWeight} from '@app/types';
import {AppLoader} from './AppLoader';

type AppButtonProps = TouchableOpacityProps & {
  onClick: () => void;
  title: string;
  titleFontWeight?: FontWeight;
  titleTextStyle?: TextStyle;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
};

export const AppButton: React.FC<AppButtonProps> = React.memo(
  ({
    onClick,
    title,
    titleFontWeight = 'extrabold',
    style,
    loading,
    disabled,
    titleTextStyle,
    ...rest
  }) => {
    return (
      <TouchableOpacity
        onPress={onClick}
        style={[styles.buttonContainer, style]}
        disabled={disabled}
        {...rest}>
        {loading ? <AppLoader style={styles.loader} /> : null}
        <AppText
          style={[styles.buttonText, titleTextStyle]}
          fontWeight={titleFontWeight}>
          {title}
        </AppText>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Theme.common.buttonColor,
    padding: scaledSize(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaledSize(8),
    width: '100%',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: scaledSize(20),
    color: Theme.common.buttonTextColor,
    textAlign: 'center',
    includeFontPadding: false,
  },
  loader: {
    marginEnd: horizontalScale(8),
  },
});
