import basketService from "../../services/basketService";
import {
    ADD_PRODUCT_TO_BASKET,
    INIT_USER_BASKET,
    REMOVE_PRODUCT_FROM_BASKET,
    UPDATE_BASKET_PRODUCT
} from "../reducers/basketSlice";
import {BasketProduct} from "../../domain/Basket.domain";
import BasketService from "../../services/basketService";

import {debounceHelper} from "../../helper/debounce.helper";

export const fetchUserBasket = () => {
    return async (dispatch : any, state: any) => {
        const { user } = state();
        // TODO: Учитывать при входе в ЛК данные из Корзины в LocalStorage
        const localBasket : BasketProduct[] = JSON.parse(localStorage.getItem('user_basket') || '[]');

        if (user.isAuth) {
            const basket = await basketService.getUserBasket(user.user.vk_user_id || user.user.id_user);

            dispatch(INIT_USER_BASKET(basket.data.basket))
        } else {
            dispatch(INIT_USER_BASKET(localBasket))
        }
    }
}

export const addProductToBasket = (basketProduct: BasketProduct) => {
    return async (dispatch: any, state: any) => {
        const { user } = state();

        if (user.isAuth) {
            const status = await basketService.addProductToBasket(basketProduct, user.user.vk_user_id || user.user.id_user);
        } else {
            BasketService.saveInLocalStorage(basketProduct);
        }

        dispatch(ADD_PRODUCT_TO_BASKET(basketProduct));
    }
}

export const removeProductFromBasket = (id_food: number) => {
    return async (dispatch: any, state: any) => {
        const { user } = state();

        if (user.isAuth) {
            const status = await basketService.removeProductFromBasket(id_food, user.user.vk_user_id || user.user.id_user);
        } else {
            BasketService.removeInLocalStorage(id_food);
        }

        dispatch(REMOVE_PRODUCT_FROM_BASKET(id_food));
    }
}

export const updateBasketProduct = (basketProduct: BasketProduct) => {
    return async (dispatch: any, state: any) => {
        const { user } = state();

        const updateBasket = async () => {
            await basketService.updateBasketProduct(user.user.vk_user_id || user.user.id_user,
                basketProduct.id_food, basketProduct.count);
        }

        if (user.isAuth) {
            debounceHelper(async() => await updateBasket(), 1000)()
        } else {
            basketService.updateInLocalStorage(basketProduct);
        }

        dispatch(UPDATE_BASKET_PRODUCT(basketProduct));
    }
}
