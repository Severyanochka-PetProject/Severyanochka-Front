import React, {FC} from 'react';

const ProductReviewStarBoard : FC = () => {
    return (
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
    );
};

export default ProductReviewStarBoard;
