const initialState = {
    items: []
}

export const stillInterestedReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'ADD_STILL_INTERESTED':
            if (state.items.some(item => item.id == action.payload.id)){
                return state
            } else {
                return {...state, items: [action.payload,...state.items]}
            }
        default:
            return state
    }
}