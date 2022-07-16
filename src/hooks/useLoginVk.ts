import {useEffect} from "react";
import queryString from "query-string";
import AuthService from "../services/authService";
import {modalAction, modalActionTypes} from "../types/modals";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import useSetAuthorizationData from "./useSetAuthorizationData";

export default function useLoginVk () {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useNavigate();

    const setAuthData = useSetAuthorizationData();

    const openSetPhoneLoginPopup = () => {
        const action: modalAction = {
            type: modalActionTypes.SWITCH_SET_PHONE_LOGIN_VK_MODAL,
            payload: {
                isOpen: true,
                popup: true
            }
        };

        dispatch(action);
    }

    useEffect(() => {
        const { access_token, email, user_id } : any = queryString.parse(location.hash);
        
        if (access_token && user_id) {
            AuthService.loginVk(access_token, user_id, email).then(async (response) => {
                const { data } = response;

                navigation('/');

                localStorage.setItem('access', data);

                const res = await AuthService.me()

                setAuthData(res.data, true)
            })
                .catch(() => {
                    openSetPhoneLoginPopup();
                })
        }
    }, [location.hash])
}
