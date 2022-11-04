import AuthService from "../../../services/authService";
import {SET_AUTH_FLAG, SET_USER_DATA} from "../../../store/reducers/userSlice";
import basketService from "../../../services/basketService";
import {SWITCH_AUTH_MODAL} from "../../../store/reducers/modalSlice";
import React from "react";
import {Dispatch} from "react";

interface ILoginHandler {
    setErrors: React.Dispatch<React.SetStateAction<{status: boolean, message: string}>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    dispatch: Dispatch<any>,
    toggleModal: (type: any, isOpen?: boolean, popup?: boolean) => void,
    payload: {
        phone_number : string, password: string
    }
}

export const loginHandler = async ({setErrors, setLoading, toggleModal, payload, dispatch}: ILoginHandler)  => {
    const { password, phone_number} = payload

    setErrors({
        status: false,
        message: ""
    })

    setLoading(true);

    try {
        const { data } = await AuthService.login({
            phone_number,
            password
        })

        localStorage.setItem('access', data)

        const response = await AuthService.me()

        dispatch(SET_USER_DATA(response.data));
        dispatch(SET_AUTH_FLAG(true));

        const status = await basketService.addRangProductsFromLocalStorageToUserBasket(response.data.id_user);

        toggleModal(SWITCH_AUTH_MODAL, false, false);
    } catch (error: any) {

        setErrors({
            status: true,
            message: error.response.data.error
        })

    } finally {
        setLoading(false);
    }
}
