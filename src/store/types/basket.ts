import {Food} from "../../domain/Food.domain";

export enum categoryActionTypes {
    ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET",
}

export interface categoryInitialState {
    products: Food[],
    length: number,
    isLoading: boolean
}

interface addProductToBasketAction {
    type: categoryActionTypes.ADD_PRODUCT_TO_BASKET,
    payload: Food
}


export type basketAction = addProductToBasketAction ;
