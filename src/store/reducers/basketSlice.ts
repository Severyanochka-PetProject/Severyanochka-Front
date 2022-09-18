import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {BasketProduct} from "../../domain/Basket.domain";
import {basketInitialState} from "../types/basket";

const initialState: basketInitialState = {
    products: [],
    selectedProductsId: [],
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
            const productIndex = state.products.findIndex((value : BasketProduct, index: number) => value.id_food === action.payload);
            state.products.splice(productIndex, 1);
        },
        UPDATE_BASKET_PRODUCT: (state, action: PayloadAction<BasketProduct>) => {
            const productIndex = state.products.findIndex((value : BasketProduct, index: number) => value.id_food === action.payload.id_food);
            state.products[productIndex].count = action.payload.count;
        },
        RESET_BASKET:(state) => {
            state.products = []
            state.selectedProductsId = []
        },
        ADD_SELECT_PRODUCTS: (state, action: PayloadAction<number | number[]>) => {
            if (Array.isArray(action.payload)) {
                state.selectedProductsId = action.payload
            } else {
                state.selectedProductsId.push(action.payload);
            }
        },
        REMOVE_SELECT_PRODUCT: (state, action: PayloadAction<number | []>) => {
            if (Array.isArray(action.payload)) {
                state.selectedProductsId = []
            } else {
                const index = state.selectedProductsId.findIndex(value => value === action.payload);
                state.selectedProductsId.splice(index, 1);
            }
        }
    }
})

export const { ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET,
    INIT_USER_BASKET, RESET_BASKET,
    UPDATE_BASKET_PRODUCT, ADD_SELECT_PRODUCTS,
    REMOVE_SELECT_PRODUCT} = categorySlice.actions;

export default categorySlice.reducer;
