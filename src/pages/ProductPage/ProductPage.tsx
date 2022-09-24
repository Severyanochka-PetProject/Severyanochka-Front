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
import Loader from "../../components/LoaderComponents/Loader/Loader";
import {IResponseServerReviews} from "../../interfaces/ProductService.interface";

const ProductPage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const products = useSelector<RootState, Food[]>(state => state.products.products);
  const isLoading = useSelector<RootState, boolean>(state => state.products.isLoading);

  const [currentProduct, setCurrentProduct] = useState({});
  const [reviews, setReviews] = useState<IResponseServerReviews | {}>({});
  const [isLoadingCurrentProduct, setLoadingCurrentProduct] = useState(true);

  const loadingProduct = async () => {
    const getProduct = async (id: number) => {
      return await productService.getProductById(id);
    }

    const { id } = queryString.parse(location.search);

    if (id !== null) {
      await getProduct(+id).then(response => {
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
    }
  }

  const loadingReviews = async () => {
    const getReviews = async (id: number) => {
      return await productService.getProductReviews(id);
    }

    const { id } = queryString.parse(location.search);

    if (id !== null) {
      await getReviews(+id).then(response => {

        if (response.data) {
          const { data } = response

          setReviews(data);
        } else {
          Notify({
            notificationType: "error",
            text: "Не удалось получить озывы о данном товаре!"
          })
        }
      })
    }
  }

  useEffect(() => {
    setLoadingCurrentProduct(true);
    Promise.all([
      loadingReviews(),
      loadingProduct()
    ]).finally(() => {
      setLoadingCurrentProduct(false)
    })
  }, [location.search])

  return (
    <div className={`page product-page ${ isLoadingCurrentProduct ? 'page_loading' : '' }`}>
      {isLoadingCurrentProduct ?
          <Loader />
          :
        <main className="main">
          <ProductHeader product={currentProduct as Food} reviews={reviews as IResponseServerReviews} />
          <div className="main__body">
            <ProductMain product={currentProduct as Food} />
          </div>
          <div className="main__reviews">
            <ProductReviews product={currentProduct as Food} reviews={reviews as IResponseServerReviews} />
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

export default ProductPage;
