import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Food} from "../../domain/Food.domain";

const initialState: any = {
    products: [],
    length: 0,
    isLoading: false
}

const categorySlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        ADD_PRODUCT_TO_BASKET: (state, action: PayloadAction<Food>) => {
            state.products.push(action.payload)
        },
        REMOVE_PRODUCT_FROM_BASKET: (state, action: PayloadAction<number>) => {
            const productIndex = state.products.findIndex((value : Food, index: number) => value.id_food === action.payload);
            state.products.splice(productIndex, 1);
        }
    }
})

export const { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } = categorySlice.actions;

export default categorySlice.reducer;
