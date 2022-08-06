import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../domain/Category.domain";
import { categoryInitialState } from "../types/category";

const initialState: categoryInitialState = {
    categories: [],
    length: 0,
    isLoading: false    
}

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        SET_CATEGORIES: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
            state.length = action.payload.length;
        },
        LOADING_DATA: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const { SET_CATEGORIES, LOADING_DATA } = categorySlice.actions;

export default categorySlice.reducer;