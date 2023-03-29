import { setLocalStorage } from '../../utils';
import {
  ARABIC_FONT_SIZE,
  BANGLA_FONT_SIZE,
  MUSHAF_MODE,
  TRANSITION_MODE,
} from './Types';

export const mushafMode = (value:any) => {
  setLocalStorage('mushafMode', value);
  return {
    type: MUSHAF_MODE,
    payload: value,
  };
};

export const transitionMode = (value:any)  => {
  setLocalStorage('transitionMode', value);
  return {
    type: TRANSITION_MODE,
    payload: value,
  };
};

export const arabicFontHandler = (value:any)  => {
  setLocalStorage('arabicFont', value);
  return {
    type: ARABIC_FONT_SIZE,
    payload: value,
  };
};

export const banglaFontHandler = (value:any)  => {
  setLocalStorage('banglaFont', value);
  return {
    type: BANGLA_FONT_SIZE,
    payload: value,
  };
};
