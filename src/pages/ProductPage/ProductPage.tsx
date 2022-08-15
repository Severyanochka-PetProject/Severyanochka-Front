import React from 'react'
import { useSelector } from 'react-redux';
import ProductLoader from '../../components/LoaderComponents/ProductLoader/ProductLoader';
import ProductHeader from '../../components/ProductComponents/ProductHeader/ProductHeader';
import ProductMain from '../../components/ProductComponents/ProductMain/ProductMain';
import ProductReviews from '../../components/ProductComponents/ProductReviews/ProductReviews';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Food } from '../../domain/Food.domain';
import RenderSection from '../../hoc/RenderSection/RenderSection';
import { RootState } from '../../store/index.js';

import './productPage.scss';

export default function ProductPage() {
  const products = useSelector<RootState, Food[]>(state => state.products.products);
  const isLoading = useSelector<RootState, boolean>(state => state.products.isLoading);
  
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
          {isLoading ? 
            [1, 2, 3, 4].map((key, index) => (
                <ProductLoader key={key} />
            ))
          :
            products.map((item, index) => (
              <ProductItem key={index} product={item} />
            ))
        }
        </RenderSection>
      </main>
    </div>
  );
}
