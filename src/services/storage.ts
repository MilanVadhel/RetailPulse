import {StorageValueTypes} from '@app/types';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const saveData = (key: string, value: any, type: StorageValueTypes) => {
  if (type === 'object') {
    storage.set(key, JSON.stringify(value));
  } else {
    storage.set(key, value);
  }
};

export const getData = (key: string, type: StorageValueTypes) => {
  if (type === 'boolean') {
    return storage.getBoolean(key);
  }

  if (type === 'number') {
    return storage.getNumber(key);
  }

  if (type === 'string') {
    return storage.getString(key);
  }

  if (type === 'object') {
    return JSON.parse(storage.getString(key) ?? '');
  }

  throw Error('Type is invalid');
};
