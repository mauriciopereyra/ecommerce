const initialState = {
    items: []
}

export const wishlistReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD_WISHLIST':
            console.log("tamos")
            console.log(action.payload)
            console.log({...state, items: [...state.items,action.payload]})
            return {...state, items: [...state.items,action.payload]}
        case 'removeWishlist':
            return state
        default:
            return state
    }
}