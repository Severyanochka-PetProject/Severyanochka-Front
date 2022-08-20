import {ADD_PRODUCT_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET} from "../store/reducers/basketSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/index.js";
import {Food} from "../domain/Food.domain";
import {basketInitialState} from "../store/types/basket";

export default function useAddToBasket() {
    const basket = useSelector<RootState, basketInitialState>(state => state.basket);
    const dispatch = useDispatch();

    return (product: Food) => {
        const existInBasket = () => {
            return basket.products.some(({id_food}) => product.id_food === id_food);
        }
        if (existInBasket()) {
            dispatch(REMOVE_PRODUCT_FROM_BASKET(product.id_food));
        } else {
            dispatch(ADD_PRODUCT_TO_BASKET(product));
        }
    }
}
