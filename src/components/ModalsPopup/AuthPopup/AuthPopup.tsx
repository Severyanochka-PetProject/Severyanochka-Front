import React, {FC, useEffect} from 'react';
import { useDispatch } from "react-redux";

import './authPopup.scss';
import phoneMask from "../../../plugins/phoneMask.js";
import {modalAction, modalActionTypes} from "../../../types/modals";


const AuthPopup: FC = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        const action: modalAction = {
            type: modalActionTypes.SWITCH_AUTH_MODAL,
            payload: {
                isOpen: false,
                popup: false
            }
        };

        dispatch(action);
    }

    useEffect(() => {
        phoneMask('input[data-tel-input]');
    })

    return (
        <div className="popup auth-popup">
            <div className="popup__close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z" fill="#414141"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z" fill="#414141"/>
                </svg>
            </div>
            <div className="auth-popup__content">
                <div className="content-header">
                    <h1>Вход</h1>
                </div>
                <div className="content-main">
                    <div className="auth-input">
                        <p>Телефон</p>
                        <input data-tel-input type="tel"/>
                    </div>
                    <div className="content-main__btn">
                        <button>Вход</button>
                    </div>
                </div>
                <div className="content-bottom">
                    <div className="content-bottom__btn">
                        <p>Регистрация</p>
                    </div>
                    <div className="content-bottom__link">
                        <p>Забыли пароль?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPopup;
