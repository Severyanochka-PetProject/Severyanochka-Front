import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../domain/Category.domain";
import { categoryInitialState } from "../types/category";

const initialState: categoryInitialState = {
    categories: [],
    length: 0    
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        SET_CATEGORIES: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
            state.length = action.payload.length;
        }
    }
})

export const { SET_CATEGORIES } = categorySlice.actions;

export default categorySlice.reducer;

// export const CategoryReducer = (state = defaultState, action: categoryAction): categoryInitialState => {
//     switch (action.type) {
//         case categoryActionTypes.GET_CATEGORIES:
//             return state
//         case categoryActionTypes.SET_CATEGORIES:
//             return {
//                 ...state,
//                 categories: action.payload,
//                 length: action.payload.length
//             }
//         default:
//             return state
//     }
// }