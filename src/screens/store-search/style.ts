import {verticalScale, horizontalScale, scaledSize} from '@app/utils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(16),
  },
  searchBar: {flex: 0.85},
  filterIconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: horizontalScale(8),
    borderRadius: scaledSize(8),
  },
});
