const ADD_WISHLIST = 'ADD_WISHLIST'

export const addWishlist = (item) => {
   return {
      type: ADD_WISHLIST,
      payload: item,
   }
}