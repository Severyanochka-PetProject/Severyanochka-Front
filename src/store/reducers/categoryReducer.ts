import { categoryAction, categoryInitialState, categoryActionTypes } from "../types/category";

const defaultState: categoryInitialState = {
    categories: [],
    length: 0    
}

export const CategoryReducer = (state = defaultState, action: categoryAction): categoryInitialState => {
    switch (action.type) {
        case categoryActionTypes.GET_CATEGORIES:
            return state
        case categoryActionTypes.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
                length: action.payload.length
            }
        default:
            return state
    }
}