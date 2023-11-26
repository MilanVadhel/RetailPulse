import {firebase} from '@react-native-firebase/firestore';
import {AppStackParamsList, Screens, StoreVisits} from '@app/types';
import {showToast} from '@app/utils';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import BackgroundService from 'react-native-background-actions';
import {StoreServiceInstance} from '@app/services';

const backgroundTaskOptions = {
  taskName: 'UPLOAD_IMAGES',
  taskTitle: 'Retail pulse',
  taskDesc: 'Uploading store photos...',
  taskIcon: {
    name: 'ic_launcher',
    type: 'mipmap',
  },
};

interface StoreImagesForm {
  selectedImages: Asset[];
  storeImages: string[];
  storeImagesRefreshing: boolean;
}
export const useStoreDetails = () => {
  const {address, area, name, id} =
    useRoute<RouteProp<AppStackParamsList, Screens.STORE_DETAILS>>()?.params ??
    {};
  const [storeImageForm, setStoreImageForm] = useState<StoreImagesForm>({
    selectedImages: [],
    storeImages: [],
    storeImagesRefreshing: false,
  });

  const uploadStoreImages = useCallback(async () => {
    try {
      const date = new Date();
      for (let i = 0; i < storeImageForm?.selectedImages?.length; i++) {
        const file = storeImageForm?.selectedImages[i];
        if (file?.uri) {
          const taskSnapShot = await StoreServiceInstance.uploadStoreImage(
            id,
            file?.uri,
            file?.fileName ?? `StoreImage_${id}`,
          );
          if (taskSnapShot?.state === 'success') {
            const downloadUrl = await StoreServiceInstance.getStoreImage(
              id,
              file?.fileName ?? `StoreImage_${id}`,
            );
            await StoreServiceInstance.addStoreImages(
              id,
              {
                images: firebase.firestore.FieldValue.arrayUnion(downloadUrl),
                storeVisitTime: date.toISOString(),
              },
              {
                merge: true,
              },
            );
          }
        }
      }
    } catch (error) {
      showToast('error', (error as Error).message);
    }
  }, [id, storeImageForm.selectedImages]);

  const addImages = useCallback(async () => {
    try {
      const {assets} = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 0,
      });
      if (assets?.length !== undefined && assets?.length > 0) {
        setStoreImageForm(prev => {
          return {
            ...prev,
            selectedImages: assets ?? [],
          };
        });
      }
    } catch (error) {
      showToast('error', (error as Error).message);
    }
  }, []);

  const saveStoreInfo = useCallback(async () => {
    try {
      if (storeImageForm?.selectedImages?.length > 0) {
        await BackgroundService.start(uploadStoreImages, backgroundTaskOptions);
      }
    } catch (error) {
      showToast('error', (error as Error).message);
    }
  }, [storeImageForm?.selectedImages?.length, uploadStoreImages]);

  const fetchStoreImages = useCallback(async () => {
    try {
      setStoreImageForm(prev => {
        return {
          ...prev,
          storeImagesRefreshing: true,
        };
      });
      const response = await StoreServiceInstance.getStoreImages(id);
      const storeImages = (response?.data() as StoreVisits)?.images;
      if (storeImages?.length > 0) {
        setStoreImageForm(prev => {
          return {
            ...prev,
            storeImages: storeImages,
          };
        });
      }
    } catch (error) {
      showToast('error', (error as Error).message);
    } finally {
      setStoreImageForm(prev => {
        return {
          ...prev,
          storeImagesRefreshing: false,
        };
      });
    }
  }, [id]);

  useEffect(() => {
    (async () => {
      await fetchStoreImages();
    })();
  }, [fetchStoreImages]);

  const refreshStoreImages = useCallback(async () => {
    await fetchStoreImages();
  }, [fetchStoreImages]);

  return {
    address,
    area,
    name,
    saveStoreInfo,
    addImages,
    storeImageForm,
    refreshStoreImages,
  };
};
