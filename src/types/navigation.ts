import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Store} from './store';

export enum Screens {
  LOGIN = 'LOGIN',
  STORE_LIST = 'STORE_LIST',
  STORE_DETAILS = 'STORE_DETAILS',
  PROFILE = 'PROFILE',
  STORE_SEARCH = 'STORE_SEARCH',
}

export const screenOptions: NativeStackNavigationOptions = {
  animation: 'slide_from_right',
  headerShown: false,
};

export type AppStackParamsList = {
  [Screens.LOGIN]: undefined;
  [Screens.STORE_LIST]: undefined;
  [Screens.STORE_DETAILS]: Store;
  [Screens.STORE_SEARCH]: undefined;
};
