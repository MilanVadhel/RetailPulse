import {Images} from '@app/assets/images';
import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

export const AppImage: React.FC<FastImageProps> = React.memo(({...rest}) => {
  return (
    <FastImage
      defaultSource={Images.PLACE_HOLDER}
      resizeMode="contain"
      {...rest}
    />
  );
});
