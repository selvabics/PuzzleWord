import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

import loginSlice from './loginSlice';

const version = 1;

// Config the persist store
const persistConfig = (key, blacklist) => ({
  key,
  version,
  storage: AsyncStorage,
  blacklist,
});

const loginReducer = persistReducer(
  persistConfig('loginReducerConfig', ['isLoading']),
  loginSlice,
);

const reducers = combineReducers({
  loginReducer,
});

export default reducers;
