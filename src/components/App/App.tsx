import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './app.scss';

import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";
import MobileHeader from "../Header/MobileBottomMenu/MobileHeader";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import useLoginVk from "../../hooks/useLoginVk";
import useRefresh from "../../hooks/useRefresh";

import { fetchCategories } from '../../store/actions/category.action';
import AppRouter from '../../router/AppRouter';

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
            <AppRouter />
            <MobileHeader />
            <Footer />
        </div>
    );
}

export default App;
