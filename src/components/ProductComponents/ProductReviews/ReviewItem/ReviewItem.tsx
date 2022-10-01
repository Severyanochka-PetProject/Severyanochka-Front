import React, {FC} from 'react';
import {parseDatetimeString} from "../../../../helper/time.helper";
import {Review} from "../../../../domain/Review.domain";

interface IReviewItem {
    review: Review
}

const ReviewItem: FC<IReviewItem> = ({ review }) => {
    return (
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
                    {review.stars && [1, 2, 3, 4, 5].map((stare, index) => (
                        <div className="rating-star" key={index}>
                            <img src={`/images/productItem/${ stare <= (review.stars ?? 0) ? 'star-set.svg' : 'star-unset.svg' }`} alt="star"/>
                        </div>
                    ))}
                </div>
                <p>{ parseDatetimeString(review.date)}</p>
            </div>
            <div className="review-text">
                <p>{review.text}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
