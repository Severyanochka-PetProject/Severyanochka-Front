import React, {FC, RefObject, useRef} from "react";
import { Food } from "../../../domain/Food.domain";

import "./productHeader.scss";
import {IResponseServerReviewsStatistic} from "../../../interfaces/ProductService.interface";
import RatingStarImg from "../../UI/RatingStarImg/RatingStarImg";
import {computedAvgRatingStars} from "../../../helper/productRating.helper";

interface IProductMain {
  product: Food,
  reviewsStatistic: IResponseServerReviewsStatistic,
  $refReviewBlock: RefObject<HTMLDivElement | null>
}

const ProductHeader: FC<IProductMain> = ({ product, reviewsStatistic, $refReviewBlock }) => {

  const scrollToReview = () => {
    if ($refReviewBlock.current) {
      $refReviewBlock.current.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="product-page-header">
      <p className="product-page-header__title">
        { product.name }
      </p>
      <div className="product-page-header__bottom">
        <p className="product-code">арт. { product.vendor_code }</p>
        <div className="product-rating" onClick={scrollToReview}>
          <div className="content-rating">
            {[1, 2, 3, 4, 5].map(i => (
                <RatingStarImg setActive={ i <= computedAvgRatingStars(reviewsStatistic.reviewsStatistic)} key={i} />
            ))}
          </div>
          <p>{ reviewsStatistic.count } отзыва</p>
        </div>
        <div className="product-controller">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 5C14.5 3.067 16.067 1.5 18 1.5C19.933 1.5 21.5 3.067 21.5 5C21.5 6.933 19.933 8.5 18 8.5C16.067 8.5 14.5 6.933 14.5 5ZM18 2.5C16.6193 2.5 15.5 3.61929 15.5 5C15.5 6.38071 16.6193 7.5 18 7.5C19.3807 7.5 20.5 6.38071 20.5 5C20.5 3.61929 19.3807 2.5 18 2.5Z"
              fill="#414141"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.5 12C2.5 10.067 4.067 8.5 6 8.5C7.933 8.5 9.5 10.067 9.5 12C9.5 13.933 7.933 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12ZM6 9.5C4.61929 9.5 3.5 10.6193 3.5 12C3.5 13.3807 4.61929 14.5 6 14.5C7.38071 14.5 8.5 13.3807 8.5 12C8.5 10.6193 7.38071 9.5 6 9.5Z"
              fill="#414141"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5 19C14.5 17.067 16.067 15.5 18 15.5C19.933 15.5 21.5 17.067 21.5 19C21.5 20.933 19.933 22.5 18 22.5C16.067 22.5 14.5 20.933 14.5 19ZM18 16.5C16.6193 16.5 15.5 17.6193 15.5 19C15.5 20.3807 16.6193 21.5 18 21.5C19.3807 21.5 20.5 20.3807 20.5 19C20.5 17.6193 19.3807 16.5 18 16.5Z"
              fill="#414141"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.15792 13.2583C8.29695 13.0197 8.60307 12.939 8.84166 13.078L15.6717 17.058C15.9103 17.197 15.991 17.5031 15.8519 17.7417C15.7129 17.9803 15.4068 18.061 15.1682 17.922L8.33819 13.942C8.0996 13.803 8.01889 13.4969 8.15792 13.2583Z"
              fill="#414141"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8418 6.25799C15.981 6.49649 15.9004 6.80266 15.6619 6.94184L8.84194 10.9218C8.60344 11.061 8.29727 10.9805 8.15808 10.742C8.0189 10.5035 8.09941 10.1973 8.33791 10.0582L15.1579 6.07816C15.3964 5.93897 15.7026 6.01948 15.8418 6.25799Z"
              fill="#414141"
            />
          </svg>
          <p>Поделиться</p>
        </div>
        <div className={`product-controller ${ false ? 'item-basket' : '' }`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7046 4.25644C13.8299 3.13067 15.3564 2.49817 16.9482 2.49817C18.5399 2.49817 20.0664 3.13063 21.1916 4.25636C22.3174 5.38164 22.95 6.90829 22.95 8.49999C22.95 10.0917 22.3175 11.6183 21.1917 12.7435C21.1917 12.7436 21.1917 12.7435 21.1917 12.7435L12.3517 21.5835C12.1565 21.7788 11.8399 21.7788 11.6446 21.5835L2.80461 12.7435C0.460963 10.3999 0.460963 6.60009 2.80461 4.25644C5.14826 1.91279 8.94807 1.91279 11.2917 4.25644L11.9982 4.96289L12.7046 4.25644C12.7046 4.25647 12.7046 4.25641 12.7046 4.25644ZM16.9482 3.49817C15.6217 3.49817 14.3496 4.02528 13.4118 4.96346L12.3517 6.02355C12.258 6.11732 12.1308 6.16999 11.9982 6.16999C11.8656 6.16999 11.7384 6.11732 11.6446 6.02355L10.5846 4.96355C8.63149 3.01042 5.46484 3.01042 3.51172 4.96355C1.55859 6.91667 1.55859 10.0833 3.51172 12.0364L11.9982 20.5229L20.4846 12.0364C21.4228 11.0987 21.95 9.82648 21.95 8.49999C21.95 7.17351 21.4229 5.90138 20.4847 4.96363C19.5469 4.02544 18.2747 3.49817 16.9482 3.49817Z"
              fill="#414141"
            />
          </svg>
          <p>В избраное</p>
        </div>
      </div>
    </div>
  );
}

export default ProductHeader;
