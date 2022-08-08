import React from 'react'
import ProductHeader from '../../components/ProductComponents/ProductHeader/ProductHeader';
import ProductMain from '../../components/ProductComponents/ProductMain/ProductMain';
import ProductReviews from '../../components/ProductComponents/ProductReviews/ProductReviews';
import ProductItem from '../../components/ProductItem/ProductItem';
import RenderSection from '../../hoc/RenderSection/RenderSection';

import './productPage.scss';

export default function ProductPage() {
  return (
    <div className="page product-page">
      <main className="main">
        <ProductHeader />
        <div className="main__body">
          <ProductMain />
        </div>
        <div className="main__reviews">
          <ProductReviews />
        </div>
        <RenderSection
          sectionTitle="Акции"
          sectionLink="#"
          sectionClass="product-section"
          sectionLinkText="Все акции"
        >
          {[1, 2, 3, 4].map((key, index) => (
            <ProductItem key={index} />
          ))}
        </RenderSection>
      </main>
    </div>
  );
}
