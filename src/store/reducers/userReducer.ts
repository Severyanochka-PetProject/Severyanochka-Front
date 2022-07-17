import {userAction, userActionTypes, userInitialState} from "../types/user";

const defaultState: userInitialState = {
    refresh_token: '',
    user: {
        id_user: null,
        first_name: '',
        last_name: '',
        phone_number: '',
        avatar_url: ''
    },
    isAuth: false,
}

export const UserReducer = (state = defaultState, action: userAction): userInitialState => {
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
        case userActionTypes.SET_AUTH_FLAG:
            return {
                ...state,
                isAuth: action.payload
            }
        default:
            return state
    }
}
