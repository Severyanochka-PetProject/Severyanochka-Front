import basketService from "../../services/basketService";
import {INIT_USER_BASKET} from "../reducers/basketSlice";
import {BasketProduct} from "../../domain/Basket.domain";

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
