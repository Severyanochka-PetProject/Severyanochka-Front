import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import queryString from "query-string";
import { useLocation, useNavigate } from 'react-router-dom';

import productService from '../../services/productService';

import ProductLoader from '../../components/LoaderComponents/ProductLoader/ProductLoader';
import ProductHeader from '../../components/ProductComponents/ProductHeader/ProductHeader';
import ProductMain from '../../components/ProductComponents/ProductMain/ProductMain';
import ProductReviews from '../../components/ProductComponents/ProductReviews/ProductReviews';
import ProductItem from '../../components/ProductItem/ProductItem';
import { Food } from '../../domain/Food.domain';
import RenderSection from '../../hoc/RenderSection/RenderSection';
import { RootState } from '../../store/index.js';

import './productPage.scss';
import Notify from '../../components/UI/ToastNotification/ToastNotification';

export default function ProductPage() {
  const location = useLocation();
  const navigation = useNavigate();
  
  const products = useSelector<RootState, Food[]>(state => state.products.products);
  const isLoading = useSelector<RootState, boolean>(state => state.products.isLoading);

  const [currentProduct, setCurrentProduct] = useState({});
  const [isLoadingCurrentProduct, setLoadingCurrentProduct] = useState(true);

  useEffect(() => {
    setLoadingCurrentProduct(true);
    const getProduct = async (id: number) => {
      return await productService.getProductById(id);
    }

    const { id } = queryString.parse(location.search);

    if (id !== null) {
      getProduct(+id).then(response => {
        if (response.data) {
          const { data } = response;

          setCurrentProduct(data);
        } else {
          Notify({
            notificationType: "error",
            text: "Товар не найден! Возможно он больше не продается"
          })

          navigation("/notfound", { replace: true });
        }
      })
      .finally(() => {
        setLoadingCurrentProduct(false)
      });
    } else {
      setLoadingCurrentProduct(false)
    }
  }, [])

  return (
    <div className="page product-page">
      {isLoadingCurrentProduct ? <p>Загрузка</p> :
        <main className="main">
          <ProductHeader product={currentProduct as Food} />
          <div className="main__body">
            <ProductMain product={currentProduct as Food} />
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
      }
    </div>
  );
}
