import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {modalAction, modalActionTypes} from "../../../store/types/modals";
import {useDispatch} from "react-redux";

import './registrationPopup.scss';

import InputField from "../../UI/InputField/InputField";
import CustomButton from "../../UI/CustomButton/CustomButton";
import BorderButton from "../../UI/BorderButton/BorderButton";

import phoneMask from "../../../plugins/phoneMask.js";

import RegistrationService from "../../../services/registrationService";

import Notify from "../../UI/ToastNotification/ToastNotification";

import useModal from "../../../hooks/useModal";
import { SWITCH_AUTH_MODAL, SWITCH_REG_MODAL } from '../../../store/reducers/modalReducer';

const RegistrationPopup : FC = () => {
    const [phone_number, setPhoneNumber] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [repeat_password, setRepeatPassword] = useState('');

    const dispatch = useDispatch();
    const closeModal = useModal();

    useEffect(() => {
        phoneMask('#phone')
    })

    const isValidPassword = useMemo(() => {
        return password.length >= 6 && password.length <= 16;
    }, [password]);

    const isValidPhoneNumber = useMemo(() => {
        return phone_number.length === 18 || phone_number.length === 17;
    }, [phone_number]);

    const isPasswordMatch = useMemo(() => {
        return repeat_password === password && repeat_password.length;
    }, [password, repeat_password])

    const isFormValid = useMemo(() => {
        return isValidPassword && first_name.length && last_name.length && isValidPhoneNumber && isPasswordMatch
    }, [isValidPassword, first_name.length, last_name.length, isValidPhoneNumber, isPasswordMatch]);

    // const openAuthPopup = () => {
    //     const action: modalAction = {
    //         type: modalActionTypes.SWITCH_AUTH_MODAL,
    //         payload: {
    //         isOpen: true,
    //             popup: true
    //         }
    //     }

    //     dispatch(action);
    // }

    const registration = async () => {
        try {
            const { data } = await RegistrationService.registration({
                first_name,
                last_name,
                phone_number,
                password,
                avatar_url: ""
            });

            if (data.status) {
                Notify({
                    text: data.msg,
                    notificationType: "success"
                })

                dispatch(SWITCH_AUTH_MODAL({isOpen: true, popup: true}));
            }
        } catch (error: any) {
            const data = error.response.data;

            Notify({
                text: data.error,
                notificationType: "error"
            })
        }
    }

    return (
        <div className="popup reg-popup">
            <div className="popup__close" onClick={() => closeModal(SWITCH_REG_MODAL, false, false)}>
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
                    <h1>??????????????????????</h1>
                </div>
                <div className="reg-popup__section">
                    <div className="section-header">
                        <p>???????????????????????? ????????</p>
                    </div>
                    <div className="section-form">
                        <div className="section-form__column section-form_column_one">
                            <InputField
                                title={'??????????????'}
                                id={'phone'}
                                onInput={(value) => setPhoneNumber(value)}
                                autoComplete="off"
                            />
                            <InputField
                                title={'??????????????'}
                                onInput={(value) => setLastName(value)}
                                autoComplete="off"
                            />
                            <InputField
                                title={'??????'}
                                onInput={(value) => setFirstName(value)}
                                autoComplete="off"
                            />
                            <InputField
                                title={'????????????'}
                                type={'password'}
                                autoComplete={'off'}
                                onInput={(value) => setPassword(value)}
                                showError={false}
                                errorText={'???????????? ???????????? ?????????? ???? 6 ???? 16 ????????????????!'}
                            />
                            <InputField
                                title={'?????????????????? ????????????'}
                                type={'password'}
                                autoComplete={'off'}
                                onInput={(value) => setRepeatPassword(value)}
                                showError={!isPasswordMatch && !!repeat_password.length}
                                errorText={'???????????? ???? ??????????????????!'}
                            />
                        </div>
                    </div>
                </div>
                <div className="reg-popup__section">
                    <div className="section-header">
                        <p>???????????????????????????? ????????</p>
                    </div>
                    <div className="section-form section-form_column_two">
                        <div className="section-form__column">
                            <InputField title={'?????????? ??????????'} type={'number'} autoComplete={'off'} onInput={(value) => {}} />
                            <InputField title={'E-mail'} type={'email'} onInput={(value) => {}} autoComplete="off" />
                        </div>
                        <div className="section-form__column">
                            <InputField title={'???????? ????????????????'} autoComplete={'off'} onInput={(value) => {}} />
                        </div>
                    </div>
                </div>
                <div className="reg-popup__footer">
                    <CustomButton name={'????????????????????????????????????'} disabled={!isFormValid} onClick={registration} />
                    <BorderButton text={'????????'} onClick={() => dispatch(SWITCH_AUTH_MODAL({isOpen: true, popup: true})) } />
                </div>
            </div>
        </div>
    );
};

export default RegistrationPopup;
