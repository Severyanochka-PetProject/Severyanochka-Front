import basketService from "../../services/basketService";
import {INIT_USER_BASKET} from "../reducers/basketSlice";

export const fetchUserBasket = () => {
    return async (dispatch : any, state: any) => {
        const { user } = state();

        const basket = await basketService.getUserBasket(user.user.vk_user_id || user.user.id_user);

        dispatch(INIT_USER_BASKET(basket.data.basket))
    }
}
