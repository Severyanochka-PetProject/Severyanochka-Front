import { User } from "../../domain/User.domain";

export enum userActionTypes {
    SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN",
    SET_USER_DATA = "SET_USER_DATA",
    SET_AUTH_FLAG = "SET_AUTH_FLAG"
}

interface setUserDataAction {
    type: userActionTypes.SET_USER_DATA,
    payload: User
}

interface setRefreshTokenAction {
    type: userActionTypes.SET_REFRESH_TOKEN,
    payload: string
}

interface setAuthFlagAction {
    type: userActionTypes.SET_AUTH_FLAG,
    payload: boolean
}

export type userAction = setUserDataAction | setRefreshTokenAction | setAuthFlagAction

export interface userInitialState {
    refresh_token: string,
    user: User,
    isAuth: boolean
}
