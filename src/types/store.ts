import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface Store extends FirebaseFirestoreTypes.DocumentData {
  id: string;
  name: string;
  route: string;
  type: string;
  area: string;
  address: string;
}

export interface StoreVisits extends FirebaseFirestoreTypes.DocumentData {
  images: string[];
  storeVisitTime: string;
}
