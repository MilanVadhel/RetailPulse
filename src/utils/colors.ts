import {CommonThemeColors, DarkThemeColors, LightThemeColors} from '@app/types';

const COLORS = {
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  COLOR_PRIMARY: '#D9614C',
  COLOR_PRIMARY_DARK: '#cd432b',
  GRAY: '#808080',
};

const CommonTheme: CommonThemeColors = {
  colorPrimary: COLORS.COLOR_PRIMARY,
  colorPrimaryDark: `${COLORS.COLOR_PRIMARY_DARK}`,
  textColor: COLORS.BLACK,
  titleTextColor: COLORS.COLOR_PRIMARY,
  inputTextColor: COLORS.BLACK,
  inputPlaceHolderColor: COLORS.GRAY,
  buttonTextColor: COLORS.WHITE,
  inputFieldBorderColor: COLORS.COLOR_PRIMARY,
  buttonColor: COLORS.COLOR_PRIMARY,
  loaderColor: COLORS.COLOR_PRIMARY,
  inputCursorColor: COLORS.COLOR_PRIMARY,
  cardBackgroundColor: COLORS.WHITE,
  borderColor: COLORS.COLOR_PRIMARY,
  bannerTextColor: COLORS.WHITE,
};

const LightTheme: LightThemeColors = {};

const DarkTheme: DarkThemeColors = {};

export const Theme = {
  common: CommonTheme,
  dark: DarkTheme,
  light: LightTheme,
};
