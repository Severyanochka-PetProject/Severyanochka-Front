import { Category } from "../domain/Category.domain";

export enum categoryActionTypes {
    SET_CATEGORIES = "SET_CATEGORIES",
    GET_CATEGORIES = "GET_CATEGORIES",
}

export interface categoryInitialState {
    categories: Category[];
    length: number;
}

interface setCategoryAction {
    type: categoryActionTypes.SET_CATEGORIES,
    payload: Category[]
}

interface getCategoryAction {
    type: categoryActionTypes.GET_CATEGORIES,
}

export type categoryAction = setCategoryAction | getCategoryAction;