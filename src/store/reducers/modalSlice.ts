import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {modalInitialState, modalAction } from "../types/modals";

const initialState: modalInitialState = {
    modalArea: {
        isOpen: false,
        modals: {
            authPopup: false,
            regPopup: false,
            setPhoneOnLoginVkPopup: false
        }
    }
}

const modalSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        SWITCH_AUTH_MODAL (state, action: PayloadAction<modalAction>) {
            state.modalArea.isOpen = action.payload.isOpen;
            state.modalArea.modals.authPopup = action.payload.popup;
        },
        SWITCH_REG_MODAL (state, action: PayloadAction<modalAction>) {
            state.modalArea.isOpen = action.payload.isOpen;
            state.modalArea.modals.regPopup = action.payload.popup;
        },
        SWITCH_SET_PHONE_LOGIN_VK_MODAL (state, action: PayloadAction<modalAction>) {
            state.modalArea.isOpen = action.payload.isOpen;
            state.modalArea.modals.setPhoneOnLoginVkPopup = action.payload.popup;
        }
    }
})

export const {SWITCH_AUTH_MODAL, SWITCH_REG_MODAL, SWITCH_SET_PHONE_LOGIN_VK_MODAL} = modalSlice.actions;

export default modalSlice.reducer;

// export const ModalReducer = (state = defaultState, action: modalAction) => {
//     switch (action.type) {
//         case modalActionTypes.SWITCH_AUTH_MODAL:
//             return {
//                 ...state,
//                 modalArea: {
//                     isOpen: action.payload.isOpen,
//                     modals: {
//                         authPopup: action.payload.popup
//                     }
//                 }
//             }
//         case  modalActionTypes.SWITCH_REG_MODAL:
//             return {
//                 ...state,
//                 modalArea: {
//                     isOpen: action.payload.isOpen,
//                     modals: {
//                         regPopup: action.payload.popup
//                     }
//                 }
//             }
//         case modalActionTypes.SWITCH_SET_PHONE_LOGIN_VK_MODAL:
//             return {
//                 ...state,
//                 modalArea: {
//                     isOpen: action.payload.isOpen,
//                     modals: {
//                         setPhoneOnLoginVkPopup: action.payload.popup
//                     }
//                 }
//             }
//         default:
//             return state
//     }
// }
