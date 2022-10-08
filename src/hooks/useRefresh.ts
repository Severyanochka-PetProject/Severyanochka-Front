import {useEffect} from "react";
import { useDispatch } from "react-redux";
import AuthService from "../services/authService";
import { SET_LOADING_USER_FLAG } from "../store/reducers/userSlice";
import useSetAuthorizationData from "./useSetAuthorizationData";

export default function useRefresh() {
    const setAuthData = useSetAuthorizationData();
    const dispatch = useDispatch();

    useEffect(() => {
        (async function fetchUserData () {
            dispatch(SET_LOADING_USER_FLAG(true));

            try {
                const response = await AuthService.refresh();
                localStorage.setItem('access', response.data)
    
                const { data } = await AuthService.me()
    
                setAuthData(data, true);
            } 
            finally {
                dispatch(SET_LOADING_USER_FLAG(false));
            }
        })()
    }, [])
}
