import React, {PropsWithChildren} from 'react';
import {useEffect, useRef} from 'react';
import RNActionSheet from 'react-native-actions-sheet';
import {ViewStyle} from 'react-native';

interface AppBottomSheetProps {
  open: boolean;
  setOpen?: (open: boolean) => () => void;
  isDark?: boolean;
  style?: ViewStyle;
  closeOnTouchBackdrop?: boolean;
  closeOnPressBack?: boolean;
  close: () => void;
}

export const AppBottomSheet = ({
  open,
  children,
  style,
  closeOnTouchBackdrop = true,
  closeOnPressBack = true,
  close,
}: PropsWithChildren<AppBottomSheetProps>) => {
  const actionSheetRef = useRef<any>(null);

  useEffect(() => {
    actionSheetRef.current.setModalVisible(open);
  }, [open]);

  return (
    <RNActionSheet
      closeOnTouchBackdrop={closeOnTouchBackdrop}
      onClose={close}
      ref={actionSheetRef}
      containerStyle={style}
      closeOnPressBack={closeOnPressBack}>
      {children}
    </RNActionSheet>
  );
};
