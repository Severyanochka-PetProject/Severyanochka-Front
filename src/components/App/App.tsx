import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './app.scss';

import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";
import MobileHeader from "../Header/MobileBottomMenu/MobileHeader";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import useLoginVk from "../../hooks/useLoginVk";
import useRefresh from "../../hooks/useRefresh";

import { fetchCategories } from '../../store/actions/category.action';
import AppRouter from '../../router/AppRouter';
import { fetchProducts } from '../../store/actions/product.action';
import {RootState} from "../../store/index.js";
import {userInitialState} from "../../store/types/user";
import {fetchUserBasket} from "../../store/actions/basket.action";

import {socket} from "../../api/socket";

function App() {
    const user = useSelector<RootState, userInitialState>(state => state.user);
    const isLoadingData = useSelector<RootState, boolean>(state => state.user.isLoadingData);
    
    useLoginVk();
    useRefresh();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [])

    useEffect(() => {
        dispatch(fetchUserBasket());
    }, [user.isAuth])

    useEffect(() => {
        socket.connect();

        socket.on('connect', () => {
            console.log('Socket connection successfully initialized!')
        })
    }, [])

    return (
        <div className="app">
            {isLoadingData ?
                <></>
                :
                <>
                    <Header />
                    <ModalWrapper />
                    <AppRouter />
                    <MobileHeader />
                    <Footer />
                </>
            }
        </div>
    );
}

export default App;
