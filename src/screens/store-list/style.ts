import {horizontalScale, scaledSize, Theme, verticalScale} from '@app/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  storeListContainer: {paddingHorizontal: horizontalScale(16), flex: 1},
  storeItemContainer: {
    elevation: 8,
    backgroundColor: Theme.common.cardBackgroundColor,
    borderRadius: scaledSize(8),
    marginTop: verticalScale(16),
  },
  storeImage: {
    width: '100%',
    height: verticalScale(160),
    borderRadius: scaledSize(8),
  },
  storeContentContainer: {padding: scaledSize(16)},
  headerContainer: {
    padding: scaledSize(16),
    backgroundColor: Theme.common.cardBackgroundColor,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenTitleText: {
    fontSize: scaledSize(24),
    flex: 1,
  },
});
