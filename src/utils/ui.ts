import {FontWeight} from '@app/types';

export const getFontFamily = (fontWeight: FontWeight) => {
  switch (fontWeight) {
    case 'normal':
      return 'Nunito-Regular';
    case 'semibold':
      return 'Nunito-SemiBold';
    case 'bold':
      return 'Nunito-Bold';
    case 'extrabold':
      return 'Nunito-ExtraBold';
    default:
      break;
  }
};
