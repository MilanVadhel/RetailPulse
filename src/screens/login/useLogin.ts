import {saveData} from '@app/services';
import {AppStackParamsList, Screens} from '@app/types';
import {
  CommonMessages,
  StorageKeys,
  ValidationMessage,
  showToast,
  validateInput,
} from '@app/utils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback, useState} from 'react';

type LoginForm = {
  email: string;
  password: string;
};
export const useLogin = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamsList>>();
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const updateLoginForm = useCallback(
    (key: 'email' | 'password') => (value: string) => {
      setLoginForm(prev => {
        return {
          ...prev,
          [key]: value,
        };
      });
    },
    [],
  );

  const login = useCallback(() => {
    if (!loginForm.email) {
      showToast('error', ValidationMessage.EMAIL_IS_EMPTY);
      return;
    }

    if (!validateInput('email', loginForm.email)) {
      showToast('error', ValidationMessage.INVALID_EMAIL);
      return;
    }

    if (!loginForm.password) {
      showToast('error', ValidationMessage.PASSWORD_IS_EMPTY);
      return;
    }

    saveData(StorageKeys.USER, loginForm, 'object');
    saveData(StorageKeys.IS_LOGIN, true, 'boolean');
    showToast('success', CommonMessages.LOGIN_SUCESS);
    navigation.replace(Screens.STORE_LIST);
  }, [loginForm, navigation]);

  return {
    login,
    loginForm,
    updateLoginForm,
  };
};
