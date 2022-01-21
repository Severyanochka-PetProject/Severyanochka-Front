import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './catalogList..scss';

interface ICatalogList {
    isOpen: boolean
}

const CatalogList :FC<ICatalogList> = ({ isOpen }) => {

    return (
        <div className={`catalog-list ${ isOpen ? 'catalog-list_open' : '' }`}>
            <div className="catalog-list__wrapper">
                <div className="list-block">
                    <Link to="#" className="list-item">
                        Молоко, сыр, яйцо
                    </Link>
                    <Link to="#" className="list-item">
                        Хлеб
                    </Link>
                    <Link to="#" className="list-item">
                        Фрукты и овощи
                    </Link>
                    <Link to="#" className="list-item">
                        Замороженные продукты
                    </Link>
                </div>
                <div className="list-block">
                    <Link to="#" className="list-item">
                        Напитки
                    </Link>
                    <Link to="#" className="list-item">
                        Кондитерские изделия
                    </Link>
                    <Link to="#" className="list-item">
                        Чай, кофе
                    </Link>
                </div>
                <div className="list-block">
                    <Link to="#" className="list-item">
                        Бакалея
                    </Link>
                    <Link to="#" className="list-item">
                        Здоровое питание
                    </Link>
                    <Link to="#" className="list-item">
                        Зоотовары
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatalogList;
