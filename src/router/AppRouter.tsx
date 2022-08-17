import React, {useEffect} from 'react'
import {Navigate, Route, Routes, useLocation} from 'react-router-dom'

import BasketPage from '../pages/BasketPage/BasketPage'
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProductPage from '../pages/ProductPage/ProductPage'

import { PrivateRoute } from './PrivateRoute'

export default function AppRouter() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={
                <ProductPage />
            } />
            <Route path="/categories"  element={<CategoriesPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
    );
}
