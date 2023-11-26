import Toast from 'react-native-toast-message';

export const showToast = (
  type: 'success' | 'error',
  message: string = 'Hello Toast',
) => {
  Toast.show({
    type: type,
    text1: message,
  });
};
