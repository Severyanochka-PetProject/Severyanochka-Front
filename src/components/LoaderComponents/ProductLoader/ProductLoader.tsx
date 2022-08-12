import React, { FC } from 'react'
// Компонент основан от <ProductItem /> 
import './productLoader.scss';

const ProductLoader : FC = () => {
  return (
    <div className="product product-skeleton-loader">
      <div className="product__like"></div>
      <div className="product__image"></div>
      <div className="product__bottom">
        <div className="product__content">
          <div className="content-price"> </div>
          <div className="content-info"></div>
          <div className="content-rating">
            <div className="rating-star"></div>
            <div className="rating-star"></div>
            <div className="rating-star"></div>
            <div className="rating-star"></div>
            <div className="rating-star"></div>
          </div>
        </div>
        <div className="product__btn"></div>
      </div>
    </div>
  );
}


export default ProductLoader;