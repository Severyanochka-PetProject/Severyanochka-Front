import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Food} from "../../domain/Food.domain";
import {BasketProduct} from "../../domain/Basket.domain";

const initialState: any = {
    products: [],
    isLoading: false
}

const categorySlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        INIT_USER_BASKET: (state, action: PayloadAction<BasketProduct[]>) => {
            state.products = []
            state.products.push(...action.payload)
        },
        ADD_PRODUCT_TO_BASKET: (state, action: PayloadAction<BasketProduct>) => {
            state.products.push(action.payload);
        },
        REMOVE_PRODUCT_FROM_BASKET: (state, action: PayloadAction<number>) => {
            const productIndex = state.products.findIndex((value : Food, index: number) => value.id_food === action.payload);
            state.products.splice(productIndex, 1);
        },
        UPDATE_BASKET_PRODUCT: (state, action: PayloadAction<BasketProduct>) => {
            const productIndex = state.products.findIndex((value : Food, index: number) => value.id_food === action.payload.id_food);
            state.products[productIndex].count = action.payload.count;
        },
        RESET_BASKET:(state) => {
            state.products = []
        }
    }
})

export const { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET, INIT_USER_BASKET, RESET_BASKET, UPDATE_BASKET_PRODUCT } = categorySlice.actions;

export default categorySlice.reducer;
