import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

class FireStoreService {
  public async getCollection(collectionName: string) {
    return (await firestore().collection(collectionName).get()).docs;
  }

  public async getDocument(collectionName: string, documentName: string) {
    return await firestore().collection(collectionName).doc(documentName).get();
  }

  public async updateDocument(
    collectionName: string,
    documentName: string,
    data: Partial<any>,
  ) {
    await firestore().collection(collectionName).doc(documentName).update(data);
  }

  public async addDocument(
    collectionName: string,
    documentName: string,
    data: Partial<any>,
    options?: FirebaseFirestoreTypes.SetOptions,
  ) {
    return await firestore()
      .collection(collectionName)
      .doc(documentName)
      .set(data, options);
  }
}

export const FireStoreServiceInstance = new FireStoreService();
