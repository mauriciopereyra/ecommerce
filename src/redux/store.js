import { configureStore } from '@reduxjs/toolkit'
import { wishlistReducer } from './wishlistReducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { cartReducer } from './cartReducer';
import { stillInterestedReducer } from './stillInterestedReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const persistConfig2 = {
  key: 'root2',
  storage,
}

const persistConfig3 = {
  key: 'root3',
  storage,
}

const wishlistPersistedReducer = persistReducer(persistConfig, wishlistReducer)
const cartPersistedReducer = persistReducer(persistConfig2, cartReducer)
const stillInterestedPersistedReducer = persistReducer(persistConfig3, stillInterestedReducer)

export const store = configureStore({
    reducer: {
      wishlist: wishlistPersistedReducer,
      cart: cartPersistedReducer,
      stillInterested: stillInterestedPersistedReducer,
    }
  })

export const persistor = persistStore(store)