import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import productReducer from './productSlice';
import cartReducer from './cartSlice';


const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['items', 'total']
};

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: persistReducer(cartPersistConfig, cartReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER
        ]
      }
    })
});

const persistor = persistStore(store);

export { store, persistor };