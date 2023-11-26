import {DBCollectionReferences} from '@app/utils';
import {FireStoreServiceInstance} from './firestore';
import {FirebaseStorageServiceInstance} from './firebase-storage';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

class StoreService {
  public async getStoresList() {
    return await FireStoreServiceInstance.getCollection(
      DBCollectionReferences.STORES,
    );
  }

  public async uploadStoreImage(
    folderName: string,
    filePath: string,
    fileName: string,
  ) {
    return await FirebaseStorageServiceInstance.uploadFile(
      folderName,
      filePath,
      fileName,
    );
  }

  public async getStoreImage(folderName: string, fileName: string) {
    return await FirebaseStorageServiceInstance.getImage(folderName, fileName);
  }

  public async updateStore(storeId: string, data: Partial<any>) {
    return await FireStoreServiceInstance.updateDocument(
      DBCollectionReferences.STORES,
      storeId,
      data,
    );
  }

  public async addStoreImages(
    documentName: string,
    data: Partial<any>,
    options?: FirebaseFirestoreTypes.SetOptions,
  ) {
    return await FireStoreServiceInstance.addDocument(
      DBCollectionReferences.STORES_VISITS,
      documentName,
      data,
      options,
    );
  }

  public async getStoreImages(storeId: string) {
    return await FireStoreServiceInstance.getDocument(
      DBCollectionReferences.STORES_VISITS,
      storeId,
    );
  }
}

export const StoreServiceInstance = new StoreService();
