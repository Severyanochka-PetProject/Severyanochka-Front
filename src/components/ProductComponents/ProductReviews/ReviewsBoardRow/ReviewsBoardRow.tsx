import React, {FC} from 'react';
import RatingStarImg from "../../../UI/RatingStarImg/RatingStarImg";

interface  IReviewsBoardRow {
    rowIndex: number,
    reviewsCount: number
}

const ReviewsBoardRow: FC<IReviewsBoardRow> = ({ rowIndex, reviewsCount}) => {
    return (
        <div className="reviews-board__row">
            <p className="reviews-board__text">{ rowIndex }</p>
            <div className="reviews-board__star-wrapper">
                {[1, 2, 3, 4, 5].map(i => (
                    <RatingStarImg setActive={ i <= rowIndex} key={i} />
                ))}
            </div>
            <p className="reviews-board__text">{ reviewsCount }</p>
        </div>
    );
};

export default ReviewsBoardRow;
