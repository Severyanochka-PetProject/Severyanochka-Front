import { useEffect } from "react";
import {useDispatch} from "react-redux";

import CategoriesService from '../services/categoriesService';
import { categoryAction, categoryActionTypes } from "../store/types/category";

export default function useFetchCategories() {
    const dispath = useDispatch();

    useEffect(() => {
        (async function fetchCategories () {
            const { data } = await CategoriesService.getCategories();

            const action : categoryAction = {
                type: categoryActionTypes.SET_CATEGORIES,
                payload: data,
            }

            dispath(action);
        })()
    }, [])
}