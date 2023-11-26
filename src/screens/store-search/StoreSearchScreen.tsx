import React from 'react';
import {BaseLayout} from '@app/layout';
import {AppInput} from '@app/components';
import {View} from 'react-native';
import {FilterIcon} from '@app/assets';
import {styles} from './style';

export const StoreSearchScreen: React.FC = React.memo(() => {
  return (
    <BaseLayout>
      <View style={styles.headerContainer}>
        <AppInput
          placeHolderText="Search store"
          keyboardType="default"
          style={styles.searchBar}
        />
        <View style={styles.filterIconContainer}>
          <FilterIcon />
        </View>
      </View>
    </BaseLayout>
  );
});
