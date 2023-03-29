import { SET_THEME } from './Types';

export const setTheme = (theme:any) => {
  return { type: SET_THEME, payload: theme };
};
