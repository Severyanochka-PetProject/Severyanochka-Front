import React, {useEffect } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
// import {useDispatch} from "react-redux";
// import queryString from "query-string";

import './app.scss';

import HomePage from "../../pages/HomePage/HomePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";

// import AuthService from "../../services/authService";
// import {IUser} from "../../models/user-model";
// import {userAction, userActionTypes} from "../../types/user";
// import {modalAction, modalActionTypes} from "../../types/modals";
import useLoginVk from "../../hooks/useLoginVk";
import useFetchUserData from "../../hooks/useFetchUserData";

function App() {
    // const dispatch = useDispatch();
    // const location = useLocation();
    // const navigation = useNavigate();

    useLoginVk();
    useFetchUserData();

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
