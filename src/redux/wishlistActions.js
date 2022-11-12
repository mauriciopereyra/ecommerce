const ADD_WISHLIST = 'ADD_WISHLIST'
const REMOVE_WISHLIST = 'REMOVE_WISHLIST'

export const addWishlist = (item) => {
   return {
      type: ADD_WISHLIST,
      payload: item,
   }
}

export const removeWishlist = (item) => {
   return {
      type: REMOVE_WISHLIST,
      payload: item,
   }
}