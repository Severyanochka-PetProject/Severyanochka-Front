import React, { FC } from 'react';
import { useSelector } from "react-redux";

import './modalWrapper.scss';
import AuthPopup from "../../components/ModalsPopup/AuthPopup/AuthPopup";
import RegistrationPopup from "../../components/ModalsPopup/RegistrationPopup/RegistrationPopup";
import {RootState} from "../../store/reducers";

const ModalWrapper: FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.modalArea.isOpen);
    const openAuth = useSelector((state: RootState) => state.modal.modalArea.modals.authPopup);
    const openReg = useSelector((state: RootState) => state.modal.modalArea.modals.regPopup);

    let currentPopup;

    if (openAuth) {
        currentPopup = <AuthPopup />
    } else if (openReg) {
        currentPopup = <RegistrationPopup />
    }

    return (
        <div className={`modal-wrapper ${isOpen ? 'modal_active' : ''}`}>
            { currentPopup }
        </div>
    );
};

export default ModalWrapper;
