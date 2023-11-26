import {BaseLayout} from '@app/layout';
import React from 'react';
import {useStoreList} from './useStoreList';
import {
  FlatList,
  RefreshControl,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {AppFullScreenLoader, AppImage, AppText} from '@app/components';
import {styles} from './style';
import {Theme} from '@app/utils';
import {Images, SearchIcon} from '@app/assets';

export const StoreListScreen: React.FC = React.memo(() => {
  const {storeListInfo, refreshStoresList, openStoreDetails, goToSearchScreen} =
    useStoreList();
  return (
    <BaseLayout spacing="none">
      {storeListInfo?.loading && storeListInfo?.storeList?.length === 0 ? (
        <AppFullScreenLoader />
      ) : (
        <>
          <View style={styles.headerContainer}>
            <AppText fontWeight="bold" style={styles.screenTitleText}>
              Retail Pulse
            </AppText>
            <TouchableNativeFeedback onPress={goToSearchScreen}>
              <SearchIcon />
            </TouchableNativeFeedback>
          </View>
          <FlatList
            data={storeListInfo?.storeList}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.storeListContainer}
            renderItem={({item}) => {
              return (
                <TouchableNativeFeedback onPress={openStoreDetails(item)}>
                  <View key={item.id} style={styles.storeItemContainer}>
                    <AppImage
                      style={styles.storeImage}
                      source={Images.PLACE_HOLDER}
                    />
                    <View style={styles.storeContentContainer}>
                      <AppText>StoreName : {item.name}</AppText>
                      <AppText>StoreArea : {item.area}</AppText>
                      <AppText numberOfLines={2}>
                        StoreAddress : {item.address}
                      </AppText>
                    </View>
                  </View>
                </TouchableNativeFeedback>
              );
            }}
            refreshControl={
              <RefreshControl
                refreshing={storeListInfo.loading}
                colors={[Theme.common.loaderColor ?? '']}
                onRefresh={refreshStoresList}
              />
            }
          />
        </>
      )}
    </BaseLayout>
  );
});
