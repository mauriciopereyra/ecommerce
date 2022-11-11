const initialState = []

export const wishlistReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'addWishlist':
            console.log("tamos")
            return state
        case 'removeWishlist':
            return state
        default:
            return state
    }
}