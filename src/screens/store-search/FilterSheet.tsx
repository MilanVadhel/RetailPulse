import React from 'react';
import {AppBottomSheet, AppText} from '@app/components';
import {scaledSize, verticalScale, horizontalScale} from '@app/utils';
import {StyleSheet, View} from 'react-native';

export const FilterSheet: React.FC = () => {
  return (
    <AppBottomSheet
      open={true}
      close={() => {}}
      style={styles.filterSheetContainer}>
      <AppText fontWeight="extrabold" style={styles.titleText}>
        Area
      </AppText>
      <View style={styles.filterChipsContainer}>
        {[1, 2, 3].map(() => {
          return (
            <View style={styles.filterChipBoxContainer}>
              <AppText>Test</AppText>
            </View>
          );
        })}
      </View>
    </AppBottomSheet>
  );
};

const styles = StyleSheet.create({
  filterSheetContainer: {padding: scaledSize(16)},
  titleText: {fontSize: scaledSize(24)},
  filterChipsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: verticalScale(16),
  },
  filterChipBoxContainer: {
    padding: scaledSize(8),
    borderRadius: scaledSize(8),
    borderWidth: scaledSize(1),
    marginEnd: horizontalScale(8),
    marginBottom: verticalScale(8),
  },
});
