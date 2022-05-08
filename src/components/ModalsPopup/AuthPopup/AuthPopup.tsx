import React, {FC, FormEvent, useEffect, useMemo, useState} from 'react';
import {useDispatch} from "react-redux";
import {modalAction, modalActionTypes} from "../../../types/modals";

import './authPopup.scss';
import phoneMask from "../../../plugins/phoneMask.js";

import ErrorHint from "../../UI/ErrorHint/ErrorHint";
import CustomButton from "../../UI/CustomButton/CustomButton";

import {userAction, userActionTypes} from "../../../types/user";
import {IUser} from "../../../models/user-model";

import AuthService from "../../../services/authService";
import BorderButton from "../../UI/BorderButton/BorderButton";

const AuthPopup: FC = () => {
    const [authStage, toggleStage] = useState(1);
    const [phone_number, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, togglePasswordVisible] = useState(false);
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

    const inputPhoneNumber = (event: FormEvent) => {
        const target = event.target as HTMLInputElement;
        setPhoneNumber(target.value);
    }

    const inputPassword = (event: FormEvent) => {
        const target = event.target as HTMLInputElement
        setPassword(target.value);
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
                            <p className="auth-input__title">Телефон</p>
                            <div className="auth-input__block">
                                <input
                                    autoFocus
                                    id="phone-input"
                                    type="input" value={phone_number}
                                    autoComplete="off"
                                    onInput={inputPhoneNumber}
                                    onKeyDown={e => e.key === 'Enter' ? checkPhone() : null}
                                />
                            </div>
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
                            <p className="auth-input__title">Пароль</p>
                            <div className="auth-input__block password-input">
                                <input
                                    autoFocus
                                    maxLength={16}
                                    value={password}
                                    onInput={inputPassword}
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    onKeyDown={e => e.key === 'Enter' ? signIn() : null}
                                />
                                {isPasswordVisible ?
                                    <svg onClick={() => togglePasswordVisible(false)} width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.56643 12C1.58302 12.0301 1.60133 12.063 1.62133 12.0986C1.73999 12.3096 1.91836 12.6133 2.15439 12.9787C2.62709 13.7107 3.32783 14.6853 4.23977 15.658C6.07276 17.6132 8.69975 19.5 12 19.5C15.3002 19.5 17.9272 17.6132 19.7602 15.658C20.6722 14.6853 21.3729 13.7107 21.8456 12.9787C22.0816 12.6133 22.26 12.3096 22.3787 12.0986C22.3987 12.0631 22.417 12.0301 22.4336 12C22.417 11.9699 22.3987 11.937 22.3787 11.9014C22.26 11.6904 22.0816 11.3867 21.8456 11.0213C21.3729 10.2893 20.6722 9.3147 19.7602 8.34197C17.9272 6.38678 15.3002 4.5 12 4.5C8.69975 4.5 6.07276 6.38678 4.23977 8.34197C3.32783 9.3147 2.62709 10.2893 2.15439 11.0213C1.91836 11.3867 1.73999 11.6904 1.62133 11.9014C1.60133 11.937 1.58302 11.9699 1.56643 12ZM23 12C23.4472 11.7764 23.4471 11.7762 23.447 11.776L23.4459 11.7737L23.443 11.7681L23.433 11.7484C23.4243 11.7316 23.4118 11.7074 23.3953 11.6763C23.3624 11.6141 23.314 11.5244 23.2502 11.4111C23.1228 11.1846 22.934 10.8633 22.6856 10.4787C22.1896 9.71066 21.4528 8.6853 20.4898 7.65803C18.5728 5.61322 15.6998 3.5 12 3.5C8.30025 3.5 5.42724 5.61322 3.51023 7.65803C2.54717 8.6853 1.81041 9.71066 1.31436 10.4787C1.06602 10.8633 0.877193 11.1846 0.749759 11.4111C0.686023 11.5244 0.637588 11.6141 0.604692 11.6763C0.588242 11.7074 0.575673 11.7316 0.567013 11.7484L0.556958 11.7681L0.554135 11.7737L0.553277 11.7754C0.553169 11.7756 0.552786 11.7764 1 12L0.552786 11.7764C0.482405 11.9172 0.482405 12.0828 0.552786 12.2236L1 12C0.552786 12.2236 0.552679 12.2234 0.552786 12.2236L0.553277 12.2246L0.554135 12.2263L0.556958 12.2319L0.567013 12.2516C0.575673 12.2684 0.588242 12.2926 0.604692 12.3237C0.637588 12.3859 0.686023 12.4756 0.749759 12.5889C0.877193 12.8154 1.06602 13.1367 1.31436 13.5213C1.81041 14.2893 2.54717 15.3147 3.51023 16.342C5.42724 18.3868 8.30025 20.5 12 20.5C15.6998 20.5 18.5728 18.3868 20.4898 16.342C21.4528 15.3147 22.1896 14.2893 22.6856 13.5213C22.934 13.1367 23.1228 12.8154 23.2502 12.5889C23.314 12.4756 23.3624 12.3859 23.3953 12.3237C23.4118 12.2926 23.4243 12.2684 23.433 12.2516L23.443 12.2319L23.4459 12.2263L23.4467 12.2246C23.4468 12.2244 23.4472 12.2236 23 12ZM23 12L23.4472 12.2236C23.5176 12.0828 23.5174 11.9168 23.447 11.776L23 12Z"
                                              fill="#414141"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12ZM12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5Z"
                                              fill="#414141"/>
                                    </svg>
                                    :
                                    <svg onClick={() => togglePasswordVisible(true)} width="24" height="24"
                                         viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M11.9973 4.50002C11.3291 4.49845 10.663 4.57458 10.0124 4.72687C9.74352 4.7898 9.47453 4.62286 9.4116 4.35398C9.34866 4.08511 9.51561 3.81612 9.78448 3.75318C10.5104 3.58327 11.2535 3.49832 11.999 3.50003C15.6985 3.50025 18.5713 5.61335 20.4882 7.65805C21.4513 8.68532 22.188 9.71068 22.6841 10.4788C22.9324 10.8633 23.1212 11.1846 23.2487 11.4111C23.3124 11.5245 23.3608 11.6142 23.3937 11.6763C23.4102 11.7074 23.4228 11.7316 23.4314 11.7485L23.4415 11.7681L23.4443 11.7737L23.4452 11.7754C23.4453 11.7757 23.4457 11.7764 22.9984 12L22.5575 11.7643C22.5158 11.8424 22.4735 11.9201 22.4306 11.9975C22.4144 11.9681 22.3966 11.936 22.3771 11.9014C22.2584 11.6905 22.0801 11.3868 21.844 11.0213C21.3713 10.2894 20.6706 9.31473 19.7587 8.342C17.9257 6.38681 15.2987 4.50003 11.9984 4.50003L11.9973 4.50002ZM22.4306 11.9975C21.8668 13.0158 21.2055 13.9772 20.4559 14.8681C20.2781 15.0794 20.3052 15.3948 20.5165 15.5726C20.7278 15.7504 21.0432 15.7232 21.221 15.5119C22.0725 14.5001 22.816 13.402 23.4394 12.2357C23.5158 12.0927 23.5182 11.9215 23.4457 11.7764L22.9984 12C22.5512 12.2236 22.5513 12.2238 22.5513 12.2238L22.5495 12.2203L22.5421 12.2057C22.5352 12.1923 22.5244 12.1715 22.5099 12.144C22.4903 12.1071 22.4639 12.0578 22.4306 11.9975ZM6.45739 5.75657C6.62498 5.97605 6.58292 6.28982 6.36345 6.45741C4.39974 7.95692 2.76752 9.84509 1.56807 12.003C1.58423 12.0323 1.60198 12.0642 1.62133 12.0986C1.73999 12.3096 1.91836 12.6133 2.15439 12.9788C2.62709 13.7107 3.32783 14.6853 4.23977 15.6581C6.072 17.6124 8.69759 19.4985 11.9959 19.5C14.0369 19.4658 16.0134 18.7799 17.6369 17.5424C17.8565 17.375 18.1702 17.4173 18.3377 17.6369C18.5051 17.8565 18.4627 18.1703 18.2431 18.3377C16.4488 19.7054 14.264 20.4631 12.0082 20.5L12 20.5001C8.30025 20.5001 5.42724 18.3868 3.51023 16.342C2.54717 15.3147 1.81041 14.2894 1.31436 13.5213C1.06602 13.1368 0.877193 12.8155 0.749759 12.5889C0.686023 12.4756 0.637588 12.3859 0.604692 12.3237C0.588242 12.2926 0.575673 12.2684 0.567013 12.2516L0.556958 12.2319L0.554135 12.2263L0.553277 12.2246C0.553169 12.2244 0.552786 12.2236 1 12L0.552786 12.2236C0.480131 12.0783 0.482605 11.9068 0.559422 11.7636C1.83702 9.38269 3.60902 7.30251 5.75655 5.66264C5.97602 5.49505 6.2898 5.5371 6.45739 5.75657ZM10.2458 9.53916C10.4341 9.74119 10.4229 10.0576 10.2209 10.2458C9.55202 10.8691 9.2767 11.8077 9.50291 12.6935C9.72912 13.5792 10.4208 14.2709 11.3066 14.4971C12.1923 14.7233 13.131 14.448 13.7542 13.7792C13.9424 13.5771 14.2588 13.566 14.4609 13.7542C14.6629 13.9425 14.6741 14.2589 14.4858 14.4609C13.6133 15.3973 12.2992 15.7827 11.0591 15.466C9.81903 15.1493 8.8507 14.181 8.53401 12.9409C8.21731 11.7008 8.60276 10.3867 9.53914 9.51422C9.74117 9.32597 10.0576 9.33714 10.2458 9.53916Z"
                                              fill="#414141"/>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L23.3536 22.6464C23.5488 22.8417 23.5488 23.1583 23.3536 23.3536C23.1583 23.5488 22.8417 23.5488 22.6464 23.3536L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                                              fill="#414141"/>
                                    </svg>
                                }
                            </div>
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
                    <div className="content-bottom__link">
                        <p>Забыли пароль?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPopup;
