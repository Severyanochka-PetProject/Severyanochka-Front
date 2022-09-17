import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/index.js";
import {Food} from "../domain/Food.domain";
import {basketInitialState} from "../store/types/basket";
import {BasketProduct} from "../domain/Basket.domain";
import {userInitialState} from "../store/types/user";
import {addProductToBasket, removeProductFromBasket} from "../store/actions/basket.action";
import BasketService from "../services/basketService";

export default function useAddToBasket() {
    const user = useSelector<RootState, userInitialState>(state => state.user);
    const basket = useSelector<RootState, basketInitialState>(state => state.basket);

    const dispatch = useDispatch();

    return (product: Food) => {
        const existInBasket = () => {
            return basket.products.some(({id_food}) => product.id_food === id_food);
        }
        if (existInBasket()) {

            if (!user.isAuth) {
                BasketService.removeInLocalStorage(product.id_food);
            }

            dispatch(removeProductFromBasket(product.id_food));
        } else {
            const basketProduct: BasketProduct = {
                count: 1,
                id_food: product.id_food,
                id_user: user.user.vk_user_id || user.user.id_user,
                product
            }

            if (!user.isAuth) {
                BasketService.saveInLocalStorage(basketProduct);
            }

            dispatch(addProductToBasket(basketProduct));
        }
    }
}
