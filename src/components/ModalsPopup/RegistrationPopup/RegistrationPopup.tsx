import React, {FC} from 'react';
import {modalAction, modalActionTypes} from "../../../types/modals";
import {useDispatch} from "react-redux";

import './registrationPopup.scss';

import InputField from "../../UI/InputField/InputField";
import CustomButton from "../../UI/CustomButton/CustomButton";

const RegistrationPopup : FC = () => {

    const dispatch = useDispatch();

    const closeModal = () => {
        const action: modalAction = {
            type: modalActionTypes.SWITCH_REG_MODAL,
            payload: {
                isOpen: false,
                popup: false
            }
        };

        dispatch(action);
    }

    return (
        <div className="popup reg-popup">
            <div className="popup__close" onClick={closeModal}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.3536 5.64645C18.5488 5.84171 18.5488 6.15829 18.3536 6.35355L6.35355 18.3536C6.15829 18.5488 5.84171 18.5488 5.64645 18.3536C5.45118 18.1583 5.45118 17.8417 5.64645 17.6464L17.6464 5.64645C17.8417 5.45118 18.1583 5.45118 18.3536 5.64645Z"
                          fill="#414141"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5.64645 5.64645C5.84171 5.45118 6.15829 5.45118 6.35355 5.64645L18.3536 17.6464C18.5488 17.8417 18.5488 18.1583 18.3536 18.3536C18.1583 18.5488 17.8417 18.5488 17.6464 18.3536L5.64645 6.35355C5.45118 6.15829 5.45118 5.84171 5.64645 5.64645Z"
                          fill="#414141"/>
                </svg>
            </div>
            <div className="reg-popup__content">
                <div className="reg-popup__header">
                    <h1>Регистрация</h1>
                </div>
                <div className="reg-popup__section">
                    <div className="section-header">
                        <p>Обязательные поля</p>
                    </div>
                    <div className="section-form">
                        <div className="section-form__column section-form_column_one">
                            <InputField title={'Телефон'} />
                            <InputField title={'Фамилия'} autoComplete={'off'} />
                            <InputField title={'Имя'} autoComplete={'off'} />
                            <InputField title={'Пароль'} type={'password'} autoComplete={'off'} />
                            <InputField title={'Повторите пароль'} type={'password'} autoComplete={'off'} />
                        </div>
                    </div>
                </div>
                <div className="reg-popup__section">
                    <div className="section-header">
                        <p>Необязательные поля</p>
                    </div>
                    <div className="section-form section-form_column_two">
                        <div className="section-form__column">
                            <InputField title={'Номер карты'} type={'number'} autoComplete={'off'} />
                            <InputField title={'E-mail'} type={'email'} autoComplete={'off'} />
                        </div>
                        <div className="section-form__column">
                            <InputField title={'Дата рождения'} autoComplete={'off'} />
                        </div>
                    </div>
                </div>
                <div className="reg-popup__footer">
                   <CustomButton name={'Продолжить'} disabled={true} />
                </div>
            </div>
        </div>
    );
};

export default RegistrationPopup;
