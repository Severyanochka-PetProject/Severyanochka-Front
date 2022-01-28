export enum modalActionTypes {
    SWITCH_AUTH_MODAL = "SWITCH_AUTH_MODAL",
}

export interface modalAction {
    type: string,
    payload: {
        isOpen: boolean,
        popup: boolean
    }
}

export interface initialState {
    modalArea: {
        isOpen: boolean,
        modals: {
            [key: string]: boolean
        }
    }
}
