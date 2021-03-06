export enum modalActionTypes {
    SWITCH_AUTH_MODAL = "SWITCH_AUTH_MODAL",
    SWITCH_REG_MODAL = "SWITCH_REG_MODAL",
    SWITCH_SET_PHONE_LOGIN_VK_MODAL = "SWITCH_SET_PHONE_LOGIN_VK_MODAL"
}

export interface modalAction {
    isOpen: boolean,
    popup: boolean
}

export interface modalInitialState {
    modalArea: {
        isOpen: boolean,
        modals: {
            [key: string]: boolean
        }
    }
}
