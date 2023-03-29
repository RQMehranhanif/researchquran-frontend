import { combineReducers } from 'redux';
import settingsReducer from './settingsReducer';
import themeReducer from './themeReducer';
import wordByWordReducer from './wordByWordReducer';

export default combineReducers({
  theme: themeReducer,
  settings: settingsReducer,
  wordData: wordByWordReducer,
});
