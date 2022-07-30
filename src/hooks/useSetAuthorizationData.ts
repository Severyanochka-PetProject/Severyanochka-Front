// import {userAction, userActionTypes} from "../store/types/user";
import {useDispatch} from "react-redux";
import { User } from "../domain/User.domain";
import { SET_AUTH_FLAG, SET_USER_DATA } from "../store/reducers/userReducer";

export default function useSetAuthorizationData() {
    const dispatch = useDispatch();

    return (userPayload: User , authFlag: boolean) => {
        dispatch(SET_USER_DATA(userPayload))
        dispatch(SET_AUTH_FLAG(authFlag))
    }
}
