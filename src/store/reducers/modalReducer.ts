import {initialState, modalAction, modalActionTypes} from "../types/modals";

const defaultState: initialState = {
    modalArea: {
        isOpen: false,
        modals: {
            authPopup: false,
            regPopup: false,
            setPhoneOnLoginVkPopup: false
        }
    }
}

export const ModalReducer = (state = defaultState, action: modalAction) => {
    switch (action.type) {
        case modalActionTypes.SWITCH_AUTH_MODAL:
            return {
                ...state,
                modalArea: {
                    isOpen: action.payload.isOpen,
                    modals: {
                        authPopup: action.payload.popup
                    }
                }
            }
        case  modalActionTypes.SWITCH_REG_MODAL:
            return {
                ...state,
                modalArea: {
                    isOpen: action.payload.isOpen,
                    modals: {
                        regPopup: action.payload.popup
                    }
                }
            }
        case modalActionTypes.SWITCH_SET_PHONE_LOGIN_VK_MODAL:
            return {
                ...state,
                modalArea: {
                    isOpen: action.payload.isOpen,
                    modals: {
                        setPhoneOnLoginVkPopup: action.payload.popup
                    }
                }
            }
        default:
            return state
    }
}
