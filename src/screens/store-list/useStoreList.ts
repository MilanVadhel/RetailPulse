import {StoreServiceInstance} from '@app/services/store';
import {AppStackParamsList, Screens, Store} from '@app/types';
import {showToast} from '@app/utils';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';

interface StoreListInfo {
  storeList: Store[];
  loading: boolean;
}
export const useStoreList = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();
  const [storeListInfo, setStoreListInfo] = useState<StoreListInfo>({
    loading: false,
    storeList: [],
  });

  const fetchStoresList = useCallback(async () => {
    try {
      setStoreListInfo(prev => {
        return {
          ...prev,
          loading: true,
        };
      });
      const response = await StoreServiceInstance.getStoresList();
      const storesList = response.map<Store>(item => {
        return {
          ...(item.data() as Store),
        };
      });
      setStoreListInfo(prev => {
        return {
          ...prev,
          storeList: storesList,
        };
      });
    } catch (error) {
      showToast('error', (error as Error).message);
    } finally {
      setStoreListInfo(prev => {
        return {
          ...prev,
          loading: false,
        };
      });
    }
  }, []);

  const refreshStoresList = useCallback(async () => {
    await fetchStoresList();
  }, [fetchStoresList]);

  const openStoreDetails = useCallback(
    (store: Store) => () => {
      navigation.navigate(Screens.STORE_DETAILS, store);
    },
    [navigation],
  );

  const goToSearchScreen = useCallback(() => {
    navigation.navigate(Screens.STORE_SEARCH);
  }, [navigation]);

  useEffect(() => {
    (async () => {
      await fetchStoresList();
    })();
  }, [fetchStoresList]);

  return {storeListInfo, refreshStoresList, openStoreDetails, goToSearchScreen};
};
