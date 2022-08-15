import CategoriesService from "../../services/categoriesService";
import { LOADING_DATA, SET_CATEGORIES } from "../reducers/categorySlice";

export const fetchCategories = () => {
    return async (dispatch : any) => {
        dispatch(LOADING_DATA(true));

        const { data } = await CategoriesService.getCategories();

        dispatch(SET_CATEGORIES(data));

        dispatch(LOADING_DATA(false));
    }
}