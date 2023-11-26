import {
  Theme,
  horizontalScale,
  scaledSize,
  screenWidth,
  verticalScale,
} from '@app/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {height: '35%', width: '100%'},
  storeBannerImage: {
    flex: 1,
  },
  addImageButtonText: {fontSize: scaledSize(32)},
  addImageButton: {
    width: scaledSize(56),
    height: scaledSize(56),
    borderRadius: scaledSize(28),
    backgroundColor: Theme.common.buttonColor,
    padding: 0,
    position: 'absolute',
    end: horizontalScale(16),
    bottom: verticalScale(16),
  },
  storeImageItemContainer: {
    width: (screenWidth - horizontalScale(32) - horizontalScale(16)) / 3,
    aspectRatio: 1,
    padding: scaledSize(8),
    borderRadius: scaledSize(8),
    borderWidth: scaledSize(1),
    borderColor: Theme.common.borderColor,
    borderStyle: 'dashed',
    marginEnd: horizontalScale(8),
  },
  storeImage: {flex: 1},
  storeImageListContainer: {
    paddingHorizontal: horizontalScale(16),
    paddingBottom: verticalScale(16),
    rowGap: verticalScale(8),
  },
  storeImageList: {marginTop: verticalScale(10)},
});
