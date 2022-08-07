import React, { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';

import './app.scss';

import HomePage from "../../pages/HomePage/HomePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";
import MobileHeader from "../Header/MobileBottomMenu/MobileHeader";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import useLoginVk from "../../hooks/useLoginVk";
import useRefresh from "../../hooks/useRefresh";

import { useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/actions/category.action';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
    useLoginVk();
    useRefresh();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

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
                <Route path="*" element={
                    <NotFound />
                }/>
            </Routes>
            <MobileHeader />
            <Footer />
        </div>
    );
}

export default App;
