import React, {FC, useEffect, useMemo, useState} from 'react';
import { useDispatch } from "react-redux";

import './authPopup.scss';
import phoneMask from "../../../plugins/phoneMask.js";

import ErrorHint from "../../UI/ErrorHint/ErrorHint";
import CustomButton from "../../UI/CustomButton/CustomButton";
import InputField from "../../UI/InputField/InputField";
import BorderButton from "../../UI/BorderButton/BorderButton";

import useModal from "../../../hooks/useModal";

import { isValidPhoneNumber, isValidPassword } from '../../../validators/validator';
import { SWITCH_AUTH_MODAL, SWITCH_REG_MODAL } from '../../../store/reducers/modalReducer';
import AuthService from "../../../services/authService";
import {SET_AUTH_FLAG, SET_USER_DATA} from "../../../store/reducers/userReducer";


const AuthPopup: FC = () => {
    const [authStage, toggleStage] = useState(1);
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setLoading] = useState(false);

    const [errors, setErrors] = useState({
        status: false,
        message: ''
    })

    const OAuthVKRedirect = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://tankistpro-food.ru"

    const toggleModal = useModal();
    const dispatch = useDispatch();

    const isValidUserPhone= useMemo(() => isValidPhoneNumber(phone_number), [phone_number]);
    const isValidUserPassword = useMemo(() => isValidPassword(password), [password]);

    useEffect(() => {
        phoneMask('#phone-input');
    })

    const checkPhone = () => {
        if (!isValidUserPhone) {
            return
        }

        toggleStage(2);
    }

    const signIn = async () => {
        if (!isValidUserPassword || !isValidUserPhone) {
            return
        }

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

    const openRegistrationPopup = () => {
        toggleModal(SWITCH_AUTH_MODAL, false, false);
        toggleModal(SWITCH_REG_MODAL, true, true )
    }

    return (
        <div className="popup auth-popup">
            <div className="popup__close" onClick={() => toggleModal(SWITCH_AUTH_MODAL, false, false)}>
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
                            <CustomButton name={'Вход'} disabled={!isValidUserPhone} onClick={checkPhone} />
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
                                onKeyDown={(e: any) => e.key === 'Enter' ? signIn : null}
                                type={'password'}
                            />
                        </div>
                        <div className="content-main__btn">
                            <CustomButton name={!isLoading ? 'Подтвердить' : 'Подождите...'} disabled={!isValidUserPassword} onClick={signIn} />
                        </div>
                    </div>
                </div>
                <div className="content-socials">
                    <a className="content-socials__link" href={`https://oauth.vk.com/authorize?client_id=8166083&redirect_uri=${OAuthVKRedirect}&display=page&scope=email&&response_type=token`}>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.09295 3.09295C4.76837e-07 6.1859 0 11.1639 0 21.12V22.88C0 32.8361 4.76837e-07 37.8141 3.09295 40.907C6.1859 44 11.1639 44 21.12 44H22.88C32.8361 44 37.8141 44 40.907 40.907C44 37.8141 44 32.8361 44 22.88V21.12C44 11.1639 44 6.1859 40.907 3.09295C37.8141 0 32.8361 0 22.88 0H21.12C11.1639 0 6.1859 0 3.09295 3.09295ZM7.39999 13.4C7.63791 24.8306 13.3478 31.7 23.3585 31.7H23.9259V25.1603C27.6044 25.5267 30.386 28.2195 31.5023 31.7H36.7C35.2725 26.4976 31.5206 23.6216 29.1781 22.5225C31.5206 21.1669 34.8148 17.8697 35.6017 13.4H30.8799C29.8551 17.027 26.8175 20.3243 23.9259 20.6357V13.4H19.2041V26.0763C16.2759 25.3435 12.5792 21.7898 12.4145 13.4H7.39999Z" fill="#2688EB"/>
                        </svg>
                    </a>
                    <a className="content-socials__link content-socials__link_disabled" href="#">
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_61_737)">
                                <path d="M40 20.9708C40 19.5773 39.8875 18.1762 39.6476 16.8053H20.4011V24.6995H31.4227C30.9653 27.2455 29.4958 29.4977 27.344 30.9289V36.0511H33.9194C37.7807 32.4807 40 27.2078 40 20.9708Z" fill="#4285F4"/>
                                <path d="M20.4011 41C25.9044 41 30.5454 39.1846 33.9269 36.051L27.3514 30.9289C25.522 32.1793 23.1602 32.8873 20.4086 32.8873C15.0853 32.8873 10.5717 29.2792 8.95219 24.4282H2.16681V29.7086C5.63073 36.6311 12.686 41 20.4011 41Z" fill="#34A853"/>
                                <path d="M8.94473 24.4283C8.09 21.8823 8.09 19.1253 8.94473 16.5793V11.299H2.16685C-0.727247 17.0915 -0.727247 23.9161 2.16685 29.7087L8.94473 24.4283Z" fill="#FBBC04"/>
                                <path d="M20.4011 8.11266C23.3102 8.06746 26.1218 9.16723 28.2287 11.186L34.0543 5.33313C30.3655 1.85306 25.4695 -0.0602222 20.4011 3.86976e-05C12.686 3.86976e-05 5.63073 4.36895 2.16681 11.299L8.94469 16.5793C10.5567 11.7208 15.0778 8.11266 20.4011 8.11266Z" fill="#EA4335"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_61_737">
                                    <rect width="40" height="41" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className="content-bottom">
                    {authStage === 1 ?
                    <BorderButton text={'Регистрация'} onClick={openRegistrationPopup} />
                        :
                        <div className="content-bottom__link" onClick={() => {
                            toggleStage(1);
                            setErrors({
                                status: false,
                                message: ""
                            })
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

