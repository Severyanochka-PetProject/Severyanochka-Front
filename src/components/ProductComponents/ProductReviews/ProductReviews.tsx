import React from "react";
import CustomButton from "../../UI/CustomButton/CustomButton";

import "./productReviews.scss";

export default function ProductReviews() {
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
              <p className="reviews-board__text">1</p>
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
              <p className="reviews-board__text">1</p>
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
              <p className="reviews-board__text">0</p>
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
              <p className="reviews-board__text">0</p>
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
              <p className="reviews-board__text">1</p>
            </div>
          </div>
        </div>
        <div className="reviews-chat">
          <div className="reviews-chat__area">
            <div className="reviews-chat__review">
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
                <p>08.08.2022</p>
              </div>
              <div className="review-text">
                <p>
                  Покупали в том числе в этом весе. Масло по вкусу и
                  органолептическим свойствам совершенно не похоже на
                  натуральное. Упаковка выглядит как напечатанная на дешёвом
                  принтере. На наш взгляд продукт является подделкой или
                  контрафактной продукцией. Просим разобраться.
                </p>
              </div>
            </div>
            <div className="reviews-chat__review">
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
                <p>Лена</p>
              </div>
              <div className="review-rating">
                <div className="review-rating__wrapper">
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
                <p>08.08.2022</p>
              </div>
              <div className="review-text">
                <p>Масло среднее, есть вкуснее</p>
              </div>
            </div>
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
            ></textarea>
            <div className="chat-input-button">
              <CustomButton disabled={true}>Отправить отзыв</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
