import { configureStore } from '@reduxjs/toolkit'
import { wishlistReducer } from './wishlistReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { cartReducer } from './cartReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const persistConfig2 = {
  key: 'root2',
  storage,
}

const wishlistPersistedReducer = persistReducer(persistConfig, wishlistReducer)
const cartPersistedReducer = persistReducer(persistConfig2, cartReducer)

export const store = configureStore({
    reducer: {
      wishlist: wishlistPersistedReducer,
      cart: cartPersistedReducer,
    }
  })

export const persistor = persistStore(store)