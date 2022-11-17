const ADD_STILL_INTERESTED = 'ADD_STILL_INTERESTED'

export const addStillInterested = (item) => {
   return {
      type: ADD_STILL_INTERESTED,
      payload: item,
   }
}