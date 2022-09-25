import React, {FC} from 'react';

interface IRatingStarImg {
    setActive?: boolean
}

const RatingStarImg: FC<IRatingStarImg> = ({ setActive = false }) => {
    return (
        <div className="rating-star">
            <img src={`/images/productItem/${ setActive ? 'star-set.svg' : 'star-unset.svg' }`} alt="star"/>
        </div>
    );
};

export default RatingStarImg;
