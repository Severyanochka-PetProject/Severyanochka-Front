import React from 'react'
import ProductHeader from '../../components/ProductComponents/ProductHeader/ProductHeader';
import ProductMain from '../../components/ProductComponents/ProductMain/ProductMain';

import './productPage.scss';

export default function ProductPage() {
  return (
    <div className="page product-page">
      <main className="main">
        <ProductHeader />
        <div className="main__body">
          <ProductMain />
        </div>
      </main>
    </div>
  );
}
