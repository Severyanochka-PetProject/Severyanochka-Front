import {IUser} from "../models/user-model";
import {userAction, userActionTypes} from "../types/user";
import {useDispatch} from "react-redux";

export default function useSetAuthorizationData() {
    const dispatch = useDispatch();

    return (userPayload: IUser, authFlag: boolean) => {
        const action: userAction = {
            type: userActionTypes.SET_USER_DATA,
            payload: userPayload
        }

        const AuthFlagAction: userAction = {
            type: userActionTypes.SET_AUTH_FLAG,
            payload: authFlag
        }
        dispatch(action)
        dispatch(AuthFlagAction)
    }
}
