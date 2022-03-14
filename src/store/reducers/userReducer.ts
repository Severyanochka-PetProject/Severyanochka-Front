import {IUserAction, userActionTypes, userInitialState} from "../../types/user";

const defaultState: userInitialState = {
    refresh_token: localStorage.getItem('access') || '',
    user: {}
}

export const userReducer = (state = defaultState, action: IUserAction) => {
    switch (action.type) {
        case userActionTypes.SET_USER_DATA:
            return {
                ...state,
                user: action.payload
            }
        case userActionTypes.SET_REFRESH_TOKEN:
            return {
                ...state,
                refresh_token: action.payload
            }
        default:
            return state
    }
}
