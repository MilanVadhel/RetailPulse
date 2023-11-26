import {Images} from '@app/assets';
import {AppButton, AppImage, AppText} from '@app/components';
import {BaseLayout} from '@app/layout';
import React from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {useStoreDetails} from './useStoreDetails';
import {styles} from './style';
import {Theme} from '@app/utils';

export const StoreDetailsScreen: React.FC = React.memo(() => {
  const {
    address,
    area,
    name,
    addImages,
    saveStoreInfo,
    storeImageForm,
    refreshStoreImages,
  } = useStoreDetails();

  return (
    <BaseLayout spacing="none">
      <View style={styles.mainContainer}>
        <AppImage
          style={styles.storeBannerImage}
          source={
            storeImageForm?.storeImages?.[0]
              ? {
                  uri: storeImageForm?.storeImages?.[0],
                }
              : Images.PLACE_HOLDER
          }
        />
        <AppButton
          onClick={addImages}
          titleFontWeight="extrabold"
          titleTextStyle={styles.addImageButtonText}
          title="+"
          style={styles.addImageButton}
        />
      </View>

      <FlatList
        data={storeImageForm?.storeImages}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item ?? index.toString()}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => {
          return (
            <>
              <AppText>StoreName : {name}</AppText>
              <AppText>StoreArea : {area}</AppText>
              <AppText numberOfLines={2}>StoreAddress : {address}</AppText>
            </>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={styles.storeImageItemContainer}
              key={item ?? index.toString()}>
              <AppImage
                source={{
                  uri: item,
                }}
                style={styles.storeImage}
              />
            </View>
          );
        }}
        contentContainerStyle={styles.storeImageListContainer}
        style={styles.storeImageList}
        refreshControl={
          <RefreshControl
            colors={[Theme.common.loaderColor ?? '']}
            refreshing={storeImageForm.storeImagesRefreshing}
            onRefresh={refreshStoreImages}
          />
        }
      />
      {storeImageForm?.selectedImages?.length > 0 && (
        <View style={styles.storeImageListContainer}>
          <AppButton title="Save" onClick={saveStoreInfo} />
        </View>
      )}
    </BaseLayout>
  );
});
