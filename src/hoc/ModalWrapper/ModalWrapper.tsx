import React, { FC } from 'react';
import { useSelector } from "react-redux";

import './modalWrapper.scss';

import AuthPopup from "../../components/ModalsPopup/AuthPopup/AuthPopup";
import RegistrationPopup from "../../components/ModalsPopup/RegistrationPopup/RegistrationPopup";
import SetPhoneLoginPopup from "../../components/ModalsPopup/SetPhoneLoginPopup/SetPhoneLoginPopup";

import {RootState} from "../../store/index.js";

const ModalWrapper: FC = () => {
    const isOpen = useSelector((state: RootState) => state.modals.modalArea.isOpen);

    const openAuth = useSelector((state: RootState) => state.modals.modalArea.modals.authPopup);
    const openReg = useSelector((state: RootState) => state.modals.modalArea.modals.regPopup);
    const openSetPhoneLogin = useSelector((state: RootState) => state.modals.modalArea.modals.setPhoneOnLoginVkPopup)

    let currentPopup;

    if (openAuth) {
        currentPopup = <AuthPopup />
    } else if (openReg) {
        currentPopup = <RegistrationPopup />
    } else if (openSetPhoneLogin) {
        currentPopup = <SetPhoneLoginPopup />
    }

    return (
        <div className={`modal-wrapper ${isOpen ? 'modal_active' : ''}`}>
            { currentPopup }
        </div>
    );
};

export default ModalWrapper;
