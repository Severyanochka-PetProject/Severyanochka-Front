import { useEffect } from "react";
import {useDispatch} from "react-redux";

import CategoriesService from '../services/categoriesService';
import { SET_CATEGORIES } from "../store/reducers/categoryReducer";

export default function useFetchCategories() {
    const dispath = useDispatch();

    useEffect(() => {
        (async function fetchCategories () {
            const { data } = await CategoriesService.getCategories();

            dispath(SET_CATEGORIES(data))
        })()
    }, [])
}