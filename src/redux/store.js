import { configureStore } from '@reduxjs/toolkit'
import { wishlistReducer } from './wishlistReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, wishlistReducer)

export const store = configureStore({
    reducer: {
      wishlist: persistedReducer,
    }
  })

export const persistor = persistStore(store)