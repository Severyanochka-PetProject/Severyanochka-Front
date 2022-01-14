export interface IAction {
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
