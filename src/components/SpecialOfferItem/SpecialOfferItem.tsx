import React from "react";
import { Link } from 'react-router-dom';

import './specialOfferItem.scss';

function SpecialOfferItem () {
    return (
        <Link to="#" className="offer">
            <div className="offer__content">
                <p>Оформите карту «Северяночка»</p>
                <small>
                    И получайте бонусы при покупке в магазинах и на сайте
                </small>
            </div>
            <div className="offer__image">
                <img src="/images/specialOfferItem/card.svg" alt="карта лояльности"/>
            </div>
        </Link>
    )
}

export default SpecialOfferItem;
