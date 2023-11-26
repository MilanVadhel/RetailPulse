interface ThemeColors {
  colorPrimary?: string;
  colorPrimaryDark?: string;
  textColor?: string;
  titleTextColor?: string;
  inputTextColor?: string;
  inputPlaceHolderColor?: string;
  buttonTextColor?: string;
  inputFieldBorderColor?: string;
  buttonColor?: string;
  loaderColor?: string;
  inputCursorColor?: string;
  cardBackgroundColor?: string;
  borderColor?: string;
  bannerTextColor?: string;
}

export interface CommonThemeColors extends ThemeColors {}
export interface LightThemeColors extends CommonThemeColors {}
export interface DarkThemeColors extends CommonThemeColors {}
