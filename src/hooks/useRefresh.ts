import {useEffect} from "react";
import AuthService from "../services/authService";
import useSetAuthorizationData from "./useSetAuthorizationData";

export default function useRefresh() {
    const setAuthData = useSetAuthorizationData();

    useEffect(() => {
        (async function fetchUserData () {
            const response = await AuthService.refresh();
            localStorage.setItem('access', response.data)

            const { data } = await AuthService.me()

            setAuthData(data, true);
        })()
    })
}
