import {DBStorageBuckets} from '@app/utils';
import storage from '@react-native-firebase/storage';

class FirebaseStorageService {
  public async uploadFile(
    folderName: string,
    filePath: string,
    fileName: string,
  ) {
    return await storage()
      .ref(`${DBStorageBuckets.STORE_IMAGES}/${folderName}/${fileName}`)
      .putFile(filePath);
  }

  public getImage(folderName: string, fileName: string) {
    return storage()
      .ref(`${DBStorageBuckets.STORE_IMAGES}/${folderName}/${fileName}`)
      .getDownloadURL();
  }
}

export const FirebaseStorageServiceInstance = new FirebaseStorageService();
