const ADD_CART = 'ADD_CART'
const REMOVE_CART = 'REMOVE_CART'
const UPDATE_CART = 'UPDATE_CART'

export const addCart = (item) => {
   return {
      type: ADD_CART,
      payload: item,
   }
}

export const removeCart = (item) => {
   return {
      type: REMOVE_CART,
      payload: item,
   }
}

export const updateCart = (item,quantity) => {
   return {
      type: UPDATE_CART,
      payload: item,
      quantity: quantity,
   }
}