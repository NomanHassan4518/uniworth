import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk';
import cartItem from '../Reducer/Reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartItem);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) // Add thunk middleware here
);

const persistor = persistStore(store);

export { store, persistor };
