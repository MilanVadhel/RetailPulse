import {AppButton, AppInput, AppText} from '@app/components';
import {BaseLayout} from '@app/layout';
import React from 'react';
import {styles} from './style';
import {useLogin} from './useLogin';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const LoginScreen: React.FC = React.memo(() => {
  const {loginForm, updateLoginForm, login} = useLogin();

  return (
    <BaseLayout>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <AppText fontWeight="extrabold" style={styles.titleText}>
          {'Login\nYour Self'}
        </AppText>
        <AppInput
          placeHolderText="Email"
          style={styles.emailInput}
          keyboardType="email-address"
          value={loginForm.email}
          onChangeText={updateLoginForm('email')}
        />
        <AppInput
          placeHolderText="Password"
          style={styles.passwordInput}
          keyboardType="visible-password"
          value={loginForm.password}
          onChangeText={updateLoginForm('password')}
        />
        <AppButton
          title="Login"
          titleFontWeight="bold"
          onClick={login}
          style={styles.loginButton}
        />
      </KeyboardAwareScrollView>
    </BaseLayout>
  );
});
