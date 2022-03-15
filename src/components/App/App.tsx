import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useDispatch} from "react-redux";

import './app.scss';

import HomePage from "../../pages/HomePage/HomePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";

import AuthService from "../../services/authService";
import {IUser} from "../../models/user-model";
import {userAction, userActionTypes} from "../../types/user";

function App() {
    const dispatch = useDispatch();

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
