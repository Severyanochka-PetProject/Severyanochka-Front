import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CategoriesPage from '../pages/CategoriesPage/CategoriesPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProductPage from '../pages/ProductPage/ProductPage'

export default function AppRouter() {
  return (
      <Routes>
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}
