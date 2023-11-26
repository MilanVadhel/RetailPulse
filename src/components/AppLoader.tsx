import {Theme} from '@app/utils';
import React from 'react';
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';

type AppLoaderProps = {
  style?: StyleProp<ViewStyle>;
  size?: 'small' | 'large';
  color?: string;
};

export const AppLoader = React.memo(
  ({
    style,
    size = 'large',
    color = Theme.common.loaderColor,
  }: AppLoaderProps) => {
    return <ActivityIndicator color={color} style={style} size={size} />;
  },
);
