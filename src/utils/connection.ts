import NetInfo from '@react-native-community/netinfo';

const isOnline = async () => {
  const netInfo = await NetInfo.fetch();
  return netInfo?.isConnected;
};
