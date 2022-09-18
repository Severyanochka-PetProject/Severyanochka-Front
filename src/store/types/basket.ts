import {Food} from "../../domain/Food.domain";
import {BasketProduct} from "../../domain/Basket.domain";

export enum categoryActionTypes {
    ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET",
}

export interface basketInitialState {
    products: BasketProduct[],
    selectedProductsId: number[],
    isLoading: boolean
}

interface addProductToBasketAction {
    type: categoryActionTypes.ADD_PRODUCT_TO_BASKET,
    payload: Food
}


export type basketAction = addProductToBasketAction ;
