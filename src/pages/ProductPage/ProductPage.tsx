import React, {RefObject, useEffect, useRef, useState} from 'react'
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
import {IResponseServerReviews, IResponseServerReviewsStatistic} from "../../interfaces/ProductService.interface";
import {socket} from "../../api/socket";

const PERPAGE_REVIEWS = 10

const ProductPage = () => {
  const location = useLocation();
  const navigation = useNavigate();

  const products = useSelector<RootState, Food[]>(state => state.products.products);
  const isLoading = useSelector<RootState, boolean>(state => state.products.isLoading);

  const $reviewBlock = useRef<HTMLDivElement>(null);

  const [currentProduct, setCurrentProduct] = useState({});
  const [reviews, setReviews] = useState<IResponseServerReviews | {}>({});
  const [reviewsStatistic, setReviewsStatistic] = useState<IResponseServerReviewsStatistic | {}>({});
  const [reviewPage, setReviewPage] = useState(1);
  const [isLoadingCurrentProduct, setLoadingCurrentProduct] = useState(true);
  const [isReviewsEnd, setReviewsEnd] = useState<boolean>(false);

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
      return await productService.getProductReviews(id, reviewPage, PERPAGE_REVIEWS);
    }

    let { id } = queryString.parse(location.search);

    if (id !== null) {
      await getReviews(+id).then(response => {

        if (response.data) {
          const { data } = response

          if (Object.keys(reviews).length
            && (reviews as IResponseServerReviews).reviewsPage[0]?.id_food === +(id as string)) {
            setReviewsEnd(data.reviewsPage.length < PERPAGE_REVIEWS);
            setReviews(prevState => ({
              ...prevState,
              reviewsPage: [
                ...(prevState as IResponseServerReviews).reviewsPage,
                ...data.reviewsPage,
              ]
            }));
          } else {
            setReviewPage(1);
            setReviewsEnd(false);
            setReviews(data)
          }


        } else {
          Notify({
            notificationType: "error",
            text: "Не удалось получить отзывы о данном товаре!"
          })
        }
      })
    }
  }

  const loadingReviewsStatistic = async () => {
    const getReviewsStatistic = async (id: number) => {
      return await productService.getProductReviewsStatistic(id);
    }

    const { id } = queryString.parse(location.search);

    if (id !== null) {
      await getReviewsStatistic(+id).then(response => {

        if (response.data) {
          const { data } = response
          setReviewsStatistic(data);
        } else {
          Notify({
            notificationType: "error",
            text: "Не удалось получить отзывы о данном товаре!"
          })
        }
      })
    }
  }

  useEffect(() => {
    loadingReviews();
  }, [reviewPage, location.search]);

  useEffect(() => {
    setLoadingCurrentProduct(true);
    Promise.all([
      loadingProduct(),
      loadingReviewsStatistic(),
    ]).finally(() => {
      setLoadingCurrentProduct(false)
    })
  }, [location.search])

  useEffect(() => {
    socket.on('REVIEW_SUCCESSFULLY_SEND', () => {
      console.log('Успешно отправлено')
    })

    socket.on('REVIEW_ERROR_SEND', () => {
      console.log('Ошибка при отправке отзыва')
    })

    socket.on('REVIEW_NEW_REVIEW', (data) => {
      const { id } = queryString.parse(location.search);

      if (Number(id) !== data.id_food) {
        return;
      }

      setReviews((prevState => ({
        ...prevState,
        reviewsPage: [
          data,
          ...(prevState as IResponseServerReviews).reviewsPage,
        ]
      })))

      setReviewsStatistic(prevState =>({
        ...prevState,
        count: (prevState as IResponseServerReviewsStatistic ).count + 1
      }))
    })

    return () => {
      socket.off('REVIEW_SUCCESSFULLY_SEND');
      socket.off('REVIEW_ERROR_SEND');
      socket.off('REVIEW_NEW_REVIEW');
      setReviews({})
    }
  }, [])

  return (
    <div className={`page product-page ${ isLoadingCurrentProduct ? 'page_loading' : '' }`}>
      {isLoadingCurrentProduct ?
          <Loader />
          :
        <main className="main">
          <ProductHeader
            product={currentProduct as Food}
            reviewsStatistic={reviewsStatistic as IResponseServerReviewsStatistic}
            $refReviewBlock={$reviewBlock}
          />
          <div className="main__body">
            <ProductMain product={currentProduct as Food} />
          </div>
          <div className="main__reviews" ref={$reviewBlock}>
            <ProductReviews
                product={currentProduct as Food}
                reviews={reviews as IResponseServerReviews}
                reviewsStatistic={reviewsStatistic as IResponseServerReviewsStatistic}
                currentPage={reviewPage}
                perPage={PERPAGE_REVIEWS}
                changePage={setReviewPage}
                isReviewsEndFlag={isReviewsEnd}
            />
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
