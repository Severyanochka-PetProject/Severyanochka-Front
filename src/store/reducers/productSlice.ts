import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../domain/Food.domain";
import { productInitialState } from "../types/products";

const initialState: productInitialState = {
    products: [],
    length: 0,
    isLoading: false    
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        SET_PRODUCTS: (state, action: PayloadAction<Food[]>) => {
            state.products = action.payload;
            state.length = action.payload.length;
        },
        LOADING_PRODUCTS_DATA: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const { SET_PRODUCTS, LOADING_PRODUCTS_DATA } = productSlice.actions;

export default productSlice.reducer;