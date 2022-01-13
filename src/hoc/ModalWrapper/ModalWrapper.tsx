import React, {FC} from 'react';

import './modalWrapper.scss';
import AuthPopup from "../../components/ModalsPopup/AuthPopup/AuthPopup";

interface IModalWrapper {
    active: Boolean,
    toggleModal: (value: boolean) => void,
}

const ModalWrapper: FC<IModalWrapper> = ({ active, toggleModal }) => {

    return (
        <div className={`modal-wrapper ${active ? 'modal_active' : ''}`}>
            <AuthPopup closeModal={(value: boolean) => toggleModal(value)} />
        </div>
    );
};

export default ModalWrapper;
