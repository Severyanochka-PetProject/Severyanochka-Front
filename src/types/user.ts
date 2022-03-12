export enum userActionTypes {
    SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN",
    SET_USER_DATA = "SET_USER_DATA",
}

export interface IUserAction {
    type: string,
    payload: object
}

export interface userInitialState {
    refresh_token: string,
    user: object
}
