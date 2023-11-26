import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens, screenOptions} from '@app/types';
import {
  LoginScreen,
  ProfileScreen,
  StoreDetailsScreen,
  StoreListScreen,
  StoreSearchScreen,
} from '@app/screens';
import {getData} from '@app/services';
import {StorageKeys} from '@app/utils';

const Stack = createNativeStackNavigator();

export const AppNavigation: React.FC = React.memo(() => {
  const isLogin = useCallback(() => {
    return getData(StorageKeys.IS_LOGIN, 'boolean');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLogin() ? Screens.STORE_LIST : Screens.LOGIN}
        screenOptions={screenOptions}>
        <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Screens.STORE_LIST} component={StoreListScreen} />
        <Stack.Screen
          name={Screens.STORE_DETAILS}
          component={StoreDetailsScreen}
        />
        <Stack.Screen name={Screens.PROFILE} component={ProfileScreen} />
        <Stack.Screen
          name={Screens.STORE_SEARCH}
          component={StoreSearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
