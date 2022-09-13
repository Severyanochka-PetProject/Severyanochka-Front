import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/index.js";
import {Food} from "../domain/Food.domain";
import {basketInitialState} from "../store/types/basket";
import {BasketProduct} from "../domain/Basket.domain";
import {userInitialState} from "../store/types/user";
import {addProductToBasket, removeProductFromBasket} from "../store/actions/basket.action";

const saveInLocalStorage = (basketProduct: BasketProduct) => {
    const currentLocalBasket = localStorage.getItem('user_basket');
    let localBasket: BasketProduct[] = [];

    if (!currentLocalBasket) {
        localBasket.push(basketProduct);
    } else {
        localBasket = JSON.parse(currentLocalBasket);
        localBasket.push(basketProduct);
    }

    localStorage.setItem('user_basket', JSON.stringify(localBasket));
}

const removeInLocalStorage = (id_food: number) => {
    let currentLocalBasket = JSON.parse(localStorage.getItem('user_basket') || '[]');

    const productIndex = currentLocalBasket.findIndex((value : Food, index: number) => value.id_food === id_food);
    currentLocalBasket.splice(productIndex, 1);

    localStorage.setItem('user_basket', JSON.stringify(currentLocalBasket));
}

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
                removeInLocalStorage(product.id_food);
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
                saveInLocalStorage(basketProduct);
            }

            dispatch(addProductToBasket(basketProduct));
        }
    }
}
