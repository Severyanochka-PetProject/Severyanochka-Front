import React, {FC, useEffect, useMemo, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import queryString from "query-string";

import './setPhoneLoginPopup.scss';

import InputField from "../../UI/InputField/InputField";
import CustomButton from "../../UI/CustomButton/CustomButton";

import phoneMask from "../../../plugins/phoneMask.js";

import AuthService from "../../../services/authService";
import BasketService from "../../../services/basketService";

import Notify from "../../UI/ToastNotification/ToastNotification";

import useModal from "../../../hooks/useModal";
import { SWITCH_SET_PHONE_LOGIN_VK_MODAL } from '../../../store/reducers/modalSlice';

const SetPhoneLoginPopup: FC = () => {
    const [phone_number, setPhoneNumber] = useState('');

    const location = useLocation();
    const navigation = useNavigate();

    const closeModal = useModal();

    useEffect(() => {
        phoneMask('#phone-input');
    })

    const isValidPhoneNumber = useMemo(() => {
        return phone_number.length === 18 || phone_number.length === 17;
    }, [phone_number]);

    // FIXME: поправить хук useLoginVK, чтобы вынести эту часть кода
    const login = async () => {
        const { access_token, email, user_id } : any = queryString.parse(location.hash);

        if (access_token && user_id) {
            await AuthService.loginVk(access_token, user_id, email, phone_number)
                .then((response) => {
                    navigation('/');

                    BasketService.clearBasketLocalStorage();

                    closeModal(SWITCH_SET_PHONE_LOGIN_VK_MODAL, false, false);
                })
                .catch((error) => {
                    const {data} = error.response;

                    if (data.error_type === 1) {
                        Notify({
                            notificationType: "error",
                            text: data.error
                        })
                    }
                })
        }
    }

    return (
        <div className="popup">
            <div className="popup__close" onClick={() => closeModal(SWITCH_SET_PHONE_LOGIN_VK_MODAL, false, false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                          fill="#414141"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                          fill="#414141"/>
                </svg>
            </div>
            <div className="popup__content set-phone-popup">
                <div className="popup__header">
                    <h1>Укажите свой номер телефона</h1>
                    <small>Для авторизации через ВК необходимо указать свой номер телефона</small>
                </div>
                <div className="set-phone-popup__input">
                    <InputField
                        title='Номер телефона'
                        id="phone-input"
                        onInput={(value) => setPhoneNumber(value)}
                        onKeyDown={(e: any) => e.key === 'Enter' ? (isValidPhoneNumber ? login() : null) : null}
                    />
                </div>
                <div className="set-phone-popup__bottom">
                    <CustomButton onClick={login} disabled={!isValidPhoneNumber}>Войти</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default SetPhoneLoginPopup;
