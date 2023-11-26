import {scaledSize, Theme, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleText: {
    fontSize: scaledSize(48),
    textAlign: 'left',
    color: Theme.common.titleTextColor,
    marginTop: verticalScale(80),
  },
  emailInput: {marginTop: verticalScale(64)},
  passwordInput: {marginTop: verticalScale(8)},
  loginButton: {marginTop: verticalScale(16)},
});
