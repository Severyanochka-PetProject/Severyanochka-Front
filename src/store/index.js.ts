import { createStore } from 'redux';
import {IAction, initialState} from "../types/modals";


const defaultState: initialState = {
    modalArea: {
        isOpen: false,
        modals: {
            authPopup: false
        }
    }
}

const reducer = (state = defaultState, action: IAction) => {
    switch (action.type) {
        case "SWITCH_AUTH_MODAL":
            return {
                ...state,
                modalArea: {
                    isOpen: action.payload.isOpen,
                    modals: {
                        authPopup: action.payload.popup
                    }
                }
            }
        default:
            return state
    }
}

const store = createStore(reducer);

export default store;
