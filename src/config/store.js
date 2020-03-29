import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: ['authReducer', 'userReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer, {}, applyMiddleware());
  let persistor = persistStore(store);
  return {store, persistor};
};
