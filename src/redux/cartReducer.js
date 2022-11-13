const initialState = {
    items: []
}

export const cartReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD_CART':
            action.payload.quantity = 1
            return {...state, items: [...state.items,action.payload]}
        case 'REMOVE_CART':
            return {...state, items: [...state.items.filter(item => item.id != action.payload.id)]}
        case 'UPDATE_CART':
            return {...state, items: [
                ...state.items.map(item => {
                    return (item.id == action.payload.id ? 
                        {...item,quantity:action.quantity}
                        : item)
                })
            ]}
        default:
            return state
    }
}