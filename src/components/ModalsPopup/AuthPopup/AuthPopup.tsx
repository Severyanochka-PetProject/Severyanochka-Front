import React, {FC, useEffect, useMemo, useState} from 'react';
import {useDispatch} from "react-redux";
import {modalAction, modalActionTypes} from "../../../types/modals";

import './authPopup.scss';
import phoneMask from "../../../plugins/phoneMask.js";

import ErrorHint from "../../UI/ErrorHint/ErrorHint";
import CustomButton from "../../UI/CustomButton/CustomButton";
import InputField from "../../UI/InputField/InputField";

import {userAction, userActionTypes} from "../../../types/user";
import {IUser} from "../../../models/user-model";

import AuthService from "../../../services/authService";
import BorderButton from "../../UI/BorderButton/BorderButton";
import ModalService from "../../../services/modalService";

const AuthPopup: FC = () => {
    const [authStage, toggleStage] = useState(1);
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({
        status: false,
        message: ''
    })

    const dispatch = useDispatch();

    const isValidPhoneNumber = useMemo(() => {
        return phone_number.length === 18 || phone_number.length === 17;
    }, [phone_number]);

    const isValidPassword = useMemo(() => {
        return password.length >= 6 && password.length <= 16;
    }, [password]);

    useEffect(() => {
        phoneMask('#phone-input');
    })

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

    const setUserData = (userPayload: IUser) => {
        const action: userAction = {
            type: userActionTypes.SET_USER_DATA,
            payload: userPayload
        }

        dispatch(action)
    }

    const setAuthFlag = (value: boolean) => {
        const action: userAction = {
            type: userActionTypes.SET_AUTH_FLAG,
            payload: value
        }

        dispatch(action)
    }

    const checkPhone = () => {
        if (!isValidPhoneNumber) {
            return
        }

        toggleStage(2);
    }

    const signIn = async () => {
        if (!isValidPassword || !isValidPhoneNumber) {
            return
        }

        if (errors.status) {
            setErrors({
                status: false,
                message: '',
            });
        }

        try {
            const {data} = await AuthService.login({
                phone_number,
                password
            })

            localStorage.setItem('access', data)

            await setUser();

            closeModal();
        } catch (error: any) {
            const data = error.response.data;
            setErrors({
                status: true,
                message: data.error
            });
        }
    }

    const setUser = async () => {
        const response = await AuthService.me()

        setUserData(response.data)
        setAuthFlag(true)
    }

    const openRegistrationPopup = () => {
        const action: modalAction = {
            type: modalActionTypes.SWITCH_REG_MODAL,
            payload: {
                isOpen: true,
                popup: true
            }
        };

        dispatch(action);
    }

    return (
        <div className="popup auth-popup">
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
            <div className="auth-popup__content">
                <div className="content-header">
                    <h1>Вход</h1>
                </div>
                <div className="content-main">
                    <div style={{display: authStage === 1 ? "block" : "none"}}>
                        <div className="auth-input">
                            <InputField
                                autoFocus
                                id={"phone-input"}
                                title={'Телефон'}
                                onInput={(value) => setPhoneNumber(value)}
                                autoComplete="off"
                                onKeyDown={(e: any) => e.key === 'Enter' ? checkPhone() : null}
                            />
                        </div>
                        <div className="content-main__btn">
                            <CustomButton name={'Вход'} disabled={!isValidPhoneNumber} onClick={checkPhone} />
                        </div>
                    </div>
                    <div style={{display: authStage === 2 ? "block" : "none"}}>
                        <div className="auth-input">
                            <div className={`auth-hint ${errors.status ? 'auth-hint_visible' : ''}`}>
                                <ErrorHint message={errors.message}/>
                            </div>
                            <InputField
                                maxLength={16}
                                title={'Пароль'}
                                onInput={(value) => setPassword(value)}
                                onKeyDown={(e: any) => e.key === 'Enter' ? signIn() : null}
                                type={'password'}
                            />
                        </div>
                        <div className="content-main__btn">
                            <CustomButton name={'Подтвердить'} disabled={!isValidPassword} onClick={signIn} />
                        </div>
                    </div>
                </div>
                <div className="content-bottom">
                    {authStage === 1 ?
                        <BorderButton text={'Регистрация'} onClick={openRegistrationPopup} />
                        :
                        <div className="content-bottom__link" onClick={() => {
                            toggleStage(1);
                            setErrors({
                                status: false,
                                message: '',
                            });
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M3.5 12C3.5 11.7239 3.72386 11.5 4 11.5H20C20.2761 11.5 20.5 11.7239 20.5 12C20.5 12.2761 20.2761 12.5 20 12.5H4C3.72386 12.5 3.5 12.2761 3.5 12Z"
                                      fill="#414141"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M10.3536 5.64645C10.5488 5.84171 10.5488 6.15829 10.3536 6.35355L4.70711 12L10.3536 17.6464C10.5488 17.8417 10.5488 18.1583 10.3536 18.3536C10.1583 18.5488 9.84171 18.5488 9.64645 18.3536L3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L9.64645 5.64645C9.84171 5.45118 10.1583 5.45118 10.3536 5.64645Z"
                                      fill="#414141"/>
                            </svg>
                            <p>Вернуться</p>
                        </div>
                    }
                    {/*<div className="content-bottom__link">*/}
                    {/*    <p>Забыли пароль?</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default AuthPopup;
