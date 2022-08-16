import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProductPage from '../pages/ProductPage/ProductPage'
import { PrivateRoute } from './PrivateRoute'

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={
            <ProductPage />
        } />
        <Route path="/categories"  element={<CategoriesPage />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
  );
}
