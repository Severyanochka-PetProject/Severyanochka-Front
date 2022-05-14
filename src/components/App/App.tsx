import React, {useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import queryString from "query-string";

import './app.scss';

import HomePage from "../../pages/HomePage/HomePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";

import AuthService from "../../services/authService";
import {IUser} from "../../models/user-model";
import {userAction, userActionTypes} from "../../types/user";
import {modalAction, modalActionTypes} from "../../types/modals";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigation = useNavigate();

    const setUserData = (userPayload: IUser) => {
        const action: userAction = {
            type: userActionTypes.SET_USER_DATA,
            payload: userPayload
        }

        dispatch(action)
    }

    const setAuthFlag = (value: boolean) => {
        const action: userAction = {
            type: userActionTypes.SET_AUTH_FLAG,
            payload: value
        }

        dispatch(action)
    }

  useEffect(() => {
      (async function fetchUserData () {
          const response = await AuthService.refresh();

          localStorage.setItem('access', response.data)

          const { data } = await AuthService.me()

          setUserData(data)
          setAuthFlag(true)
      })()
  })

    useEffect(() => {
        const { access_token, email, user_id } : any = queryString.parse(location.hash);

        if (access_token && user_id) {
            AuthService.loginVk({
                access_token,
                email,
                vk_user_id: user_id,
            }).then(async (response) => {
                const { data } = response;

                navigation('/');

                localStorage.setItem('access', data);

                const res = await AuthService.me()

                setUserData(res.data)
                setAuthFlag(true)
            })
                .catch((error) => {
                    // const { data } = error.response;
                    openSetPhoneLoginPopup();
                })
        }
    }, [location.hash])

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

  return (
    <div className="app">
        <ModalWrapper />
        <Routes>
            <Route path="/categories" element={
                <CategoriesPage />
            }/>
            <Route path="/" element={
                <HomePage/>
            }/>
        </Routes>
    </div>
  );
}

export default App;
