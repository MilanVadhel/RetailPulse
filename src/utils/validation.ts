import {REGEX_EMAIL} from './regex';

export const validateInput = (key: 'email', value: string) => {
  switch (key) {
    case 'email':
      return REGEX_EMAIL.test(value);
  }
};
