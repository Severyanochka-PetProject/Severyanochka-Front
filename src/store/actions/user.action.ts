import AuthService from "../../services/authService";
import {SET_AUTH_FLAG} from "../reducers/userSlice";
import {RESET_BASKET} from "../reducers/basketSlice";

export const exit = () => {
    return async (dispatch: any) => {
        const { data } = await AuthService.logout();

        if (data.status) {
            dispatch(SET_AUTH_FLAG(false));
            dispatch(RESET_BASKET());
        } else {
            console.log('Не удалось выйти из личного кабинета')
        }
    }
}

export const loginVK = () => {
    return (dispatch: any) => {

    }
}
