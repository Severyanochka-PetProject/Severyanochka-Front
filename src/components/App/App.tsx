import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './app.scss';

import HomePage from "../../pages/HomePage/HomePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";
import MobileHeader from "../Header/MobileBottomMenu/MobileHeader";

import useLoginVk from "../../hooks/useLoginVk";
import useFetchUserData from "../../hooks/useFetchUserData";
import useFetchCategories from '../../hooks/useFetchCategories';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
    useLoginVk();
    useFetchUserData();
    useFetchCategories();  

    return (
        <div className="app">
            <Header />
            <ModalWrapper />
            <Routes>
                <Route path="/categories" element={
                    <CategoriesPage />
                }/>
                <Route path="/" element={
                    <HomePage/>
                }/>
            </Routes>
            <MobileHeader />
            <Footer />
        </div>
    );
}

export default App;
