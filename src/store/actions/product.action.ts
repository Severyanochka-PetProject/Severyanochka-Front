import productService from "../../services/productService";
import { LOADING_PRODUCTS_DATA, SET_PRODUCTS } from "../reducers/productSlice"

export const fetchProducts = () => {
    return async (dispatch: any) => {
        dispatch(LOADING_PRODUCTS_DATA(true));

        const { data } = await productService.getProducts();

        dispatch(SET_PRODUCTS(data));

        dispatch(LOADING_PRODUCTS_DATA(false));
    }
}