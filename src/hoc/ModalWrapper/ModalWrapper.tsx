import React, { FC } from 'react';
import { useSelector } from "react-redux";

import './modalWrapper.scss';
import AuthPopup from "../../components/ModalsPopup/AuthPopup/AuthPopup";
import {RootState} from "../../store/reducers";

const ModalWrapper: FC = () => {
    const isOpen = useSelector((state: RootState) => state.modal.modalArea.isOpen)

    return (
        <div className={`modal-wrapper ${isOpen ? 'modal_active' : ''}`}>
            <AuthPopup />
        </div>
    );
};

export default ModalWrapper;
