import React, {FC, useEffect, useState} from "react";
import CustomButton from "../../UI/CustomButton/CustomButton";

import "./productReviews.scss";
import {socket} from "../../../api/socket";
import {Food} from "../../../domain/Food.domain";
import {useSelector} from "react-redux";
import {RootState} from "../../../store/index.js";
import {User} from "../../../domain/User.domain";
import {IResponseServerReviews} from "../../../interfaces/ProductService.interface";
import {parseDatetimeString} from "../../../helper/time.helper";
import {Review} from "../../../domain/Review.domain";

interface IProductReviews {
  product: Food,
  reviews: IResponseServerReviews,
}

const ProductReviews: FC<IProductReviews> = ({ product, reviews }) => {
  const user = useSelector<RootState, User>(state => state.user.user);

  const [reviewText, setReviewText] = useState<string>('');

  const sendReview = () => {
    if (!reviewText.length) {
      return
    }
    let reviewForm: Review = {
      text: reviewText,
      stars: null,
      id_user: user.id_user,
      id_food: product.id_food,
      product: product,
      date: Date.now()
    }

    socket.emit('USER_SEND_REVIEW', reviewForm)

    setReviewText('');
  }

  return (
    <div className="product-page-reviews">
      <div className="section__header">
        <h2>Отзывы</h2>
      </div>
      <div className="product-page-reviews__wrapper">
        <div className="reviews-board">
          <div className="reviews-board__top">
            <div className="reviews-board__star-wrapper">
              <div className="rating-star">
                <img src="/images/productItem/star-set.svg" alt="star" />
              </div>
              <div className="rating-star">
                <img src="/images/productItem/star-set.svg" alt="star" />
              </div>
              <div className="rating-star">
                <img src="/images/productItem/star-set.svg" alt="star" />
              </div>
              <div className="rating-star">
                <img src="/images/productItem/star-set.svg" alt="star" />
              </div>
              <div className="rating-star">
                <img src="/images/productItem/star-unset.svg" alt="star" />
              </div>
            </div>
            <p className="reviews-board__text reviews-board__text_bold">
              4 из 5
            </p>
          </div>
          <div className="reviews-board__bottom">
            <div className="reviews-board__row">
              <p className="reviews-board__text">5</p>
              <div className="reviews-board__star-wrapper">
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
              </div>
              <p className="reviews-board__text">{ reviews.reviewsStatistic[5] }</p>
            </div>
            <div className="reviews-board__row">
              <p className="reviews-board__text">4</p>
              <div className="reviews-board__star-wrapper">
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
              </div>
              <p className="reviews-board__text">{ reviews.reviewsStatistic[4] }</p>
            </div>
            <div className="reviews-board__row">
              <p className="reviews-board__text">3</p>
              <div className="reviews-board__star-wrapper">
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
              </div>
              <p className="reviews-board__text">{ reviews.reviewsStatistic[3] }</p>
            </div>
            <div className="reviews-board__row">
              <p className="reviews-board__text">2</p>
              <div className="reviews-board__star-wrapper">
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
              </div>
              <p className="reviews-board__text">{ reviews.reviewsStatistic[2] }</p>
            </div>
            <div className="reviews-board__row">
              <p className="reviews-board__text">1</p>
              <div className="reviews-board__star-wrapper">
                <div className="rating-star">
                  <img src="/images/productItem/star-set.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
              </div>
              <p className="reviews-board__text">{ reviews.reviewsStatistic[1] }</p>
            </div>
          </div>
        </div>
        <div className="reviews-chat">
          <div className="reviews-chat__area">
            {reviews.reviews.map(r => (
                <div className="reviews-chat__review" key={r.date}>
                  <div className="review-user">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.33325 12.6667C2.33325 11.0098 3.6764 9.66669 5.33325 9.66669H10.6666C12.3234 9.66669 13.6666 11.0098 13.6666 12.6667V14C13.6666 14.1841 13.5173 14.3334 13.3333 14.3334C13.1492 14.3334 12.9999 14.1841 12.9999 14V12.6667C12.9999 11.378 11.9552 10.3334 10.6666 10.3334H5.33325C4.04459 10.3334 2.99992 11.378 2.99992 12.6667V14C2.99992 14.1841 2.85068 14.3334 2.66659 14.3334C2.48249 14.3334 2.33325 14.1841 2.33325 14V12.6667Z"
                          fill="#414141"
                      />
                      <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5 4.66669C5 3.00983 6.34315 1.66669 8 1.66669C9.65685 1.66669 11 3.00983 11 4.66669C11 6.32354 9.65685 7.66669 8 7.66669C6.34315 7.66669 5 6.32354 5 4.66669ZM8 2.33335C6.71134 2.33335 5.66667 3.37802 5.66667 4.66669C5.66667 5.95535 6.71134 7.00002 8 7.00002C9.28866 7.00002 10.3333 5.95535 10.3333 4.66669C10.3333 3.37802 9.28866 2.33335 8 2.33335Z"
                          fill="#414141"
                      />
                    </svg>
                    <p>Николай</p>
                  </div>
                  <div className="review-rating">
                    <div className="review-rating__wrapper">
                      {r.stars && [1, 2, 3, 4, 5].map((stare, index) => (
                          <div className="rating-star" key={index}>
                            <img src={`/images/productItem/${ stare <= (r.stars ?? 0) ? 'star-set.svg' : 'star-unset.svg' }`} alt="star"/>
                          </div>
                      ))}
                    </div>
                    <p>{ parseDatetimeString(r.date)}</p>
                  </div>
                  <div className="review-text">
                    <p>{r.text}</p>
                  </div>
                </div>
            ))
            }
          </div>
          <div className="reviews-chat__input">
            <div className="chat-input-rating">
              <p className="reviews-board__text reviews-board__text_bold">
                Ваша оценка
              </p>
              <div className="reviews-board__star-wrapper">
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
                <div className="rating-star">
                  <img src="/images/productItem/star-unset.svg" alt="star" />
                </div>
              </div>
            </div>
            <textarea
              className="chat-input-field"
              placeholder="Отзыв"
              value={reviewText}
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
