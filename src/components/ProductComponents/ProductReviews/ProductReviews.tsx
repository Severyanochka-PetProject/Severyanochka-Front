import React, {FC, useEffect, useRef, useState} from "react";

import CustomButton from "../../UI/CustomButton/CustomButton";

import "./productReviews.scss";
import {socket} from "../../../api/socket";
import {Food} from "../../../domain/Food.domain";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/index.js";
import {IResponseServerReviews, IResponseServerReviewsStatistic} from "../../../interfaces/ProductService.interface";
import {Review} from "../../../domain/Review.domain";
import ProductReviewStarBoard from "./ProductReviewStarBoard/ProductReviewStarBoard";
import RatingStarImg from "../../UI/RatingStarImg/RatingStarImg";
import ReviewsBoardRow from "./ReviewsBoardRow/ReviewsBoardRow";
import {userInitialState} from "../../../store/types/user";
import {SWITCH_AUTH_MODAL} from "../../../store/reducers/modalSlice";
import useModal from "../../../hooks/useModal";
import ReviewItem from "./ReviewItem/ReviewItem";

interface IProductReviews {
  product: Food,
  reviews: IResponseServerReviews,
  reviewsStatistic: IResponseServerReviewsStatistic,
  currentPage: number,
  perPage: number,
  changePage: (value: number) => void,
  isReviewsEndFlag: boolean
}

const ProductReviews: FC<IProductReviews> = ({ product, reviews, reviewsStatistic, currentPage, changePage, isReviewsEndFlag, perPage }) => {
  const toggleModal = useModal();
  const user = useSelector<RootState, userInitialState>(state => state.user);
  
  const $chatArea = useRef<HTMLDivElement>(null);

  const [reviewText, setReviewText] = useState<string>('');

  const sendReview = () => {
    if (!reviewText.length) {
      return;
    }

    if (!user.isAuth) {
      toggleModal(SWITCH_AUTH_MODAL, true, true);
      return;
    }

    let reviewForm: Review = {
      text: reviewText,
      stars: null,
      id_user: user.user.id_user,
      id_food: product.id_food,
      product: product,
      date: Date.now()
    }

    socket.emit('USER_SEND_REVIEW', reviewForm)

    setReviewText('');
  }

  useEffect(() => {
    const scrollListner = () => {
      if ($chatArea.current!.scrollHeight <= 
        ($chatArea.current!.scrollTop + $chatArea.current!.offsetHeight) 
        && !isReviewsEndFlag) 
        {
        changePage(currentPage + 1);
      }
    }

    if ($chatArea !== null && $chatArea.current !== null) {
      $chatArea.current.addEventListener('scroll', scrollListner)
    }

    return () => {
      $chatArea.current?.removeEventListener('scroll', scrollListner)
    }
  }, [changePage, currentPage, isReviewsEndFlag])

  return (
    <div className="product-page-reviews">
      <div className="section__header">
        <h2>Отзывы</h2>
      </div>
      <div className="product-page-reviews__wrapper">
        <div className="reviews-board">
          <div className="reviews-board__top">
            <div className="reviews-board__star-wrapper">
              {[1, 2, 3, 4, 5].map(i => (
                  <RatingStarImg setActive={ i <= 4} key={i} />
              ))}
            </div>
            <p className="reviews-board__text reviews-board__text_bold">
              4 из 5
            </p>
          </div>
          <div className="reviews-board__bottom">
            {[5, 4, 3, 2, 1].map((value, index) => (
                <ReviewsBoardRow rowIndex={value}
                                reviewsCount={ reviewsStatistic.reviewsStatistic[value as keyof typeof reviewsStatistic.reviewsStatistic] }
                                key={index}
                />
              ))
            }
          </div>
        </div>
        <div className="reviews-chat">
          <div className={`reviews-chat__area ${ reviews.reviewsPage.length >= 5 ? 'reviews-chat__area_overflow-set' : '' }`} ref={$chatArea}>
            {reviews.reviewsPage.map(r => (
              <ReviewItem review={r} key={r.date} />
            ))}
          </div>
          <div className="reviews-chat__input">
            <ProductReviewStarBoard />
            <textarea
              className="chat-input-field"
              placeholder="Отзыв"
              value={reviewText}
              onKeyDown={(event => event.key === 'Enter' ? sendReview(): null)}
              onChange={e => setReviewText(e.target.value)}
            />
            <div className="chat-input-button">
              <CustomButton disabled={!reviewText.length} onClick={sendReview} >Отправить отзыв</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
