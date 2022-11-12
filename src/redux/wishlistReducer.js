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
        case 'REMOVE_WISHLIST':
            return {...state, items: [...state.items.filter(item => item.id != action.payload.id)]}
        default:
            return state
    }
}