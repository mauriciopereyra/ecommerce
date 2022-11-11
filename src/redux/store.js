import { configureStore } from '@reduxjs/toolkit'
import { wishlistReducer } from './wishlistReducer'

export const store = configureStore({
    reducer: {
      wishlist: wishlistReducer,
    }
  })