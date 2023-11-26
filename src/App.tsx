/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {AppNavigation} from './navigation/AppNavigation';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {LayoutAnimation, View} from 'react-native';
import {AppText} from './components';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';
import {Theme, scaledSize} from './utils';

function App(): JSX.Element {
  return (
    <>
      <AppNavigation />
      <NoInternetBanner />
      <Toast />
    </>
  );
}

const NoInternetBanner: React.FC = React.memo(() => {
  const [isOffline, setOffline] = useState<boolean>(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = state.isConnected;
        setOffline(!offline);
      },
    );
    return () => {
      removeNetInfoSubscription();
    };
  }, []);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isOffline]);

  return (
    <>
      {isOffline ? (
        <View
          style={{
            width: '100%',
            height: '8%',
            justifyContent: 'center',
            elevation: 1,
            zIndex: 1,
            paddingTop: '5%',
            position: 'absolute',
            backgroundColor: 'red',
            alignItems: 'center',
          }}>
          <AppText
            fontWeight="bold"
            style={{
              flex: 1,
              fontSize: scaledSize(24),
              justifyContent: 'center',
              alignItems: 'center',
              color: Theme.common.bannerTextColor,
            }}>
            No Internet
          </AppText>
        </View>
      ) : null}
    </>
  );
});

export default App;
