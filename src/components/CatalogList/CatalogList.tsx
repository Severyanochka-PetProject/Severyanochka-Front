import React, {FC} from 'react';
import {Link} from "react-router-dom";

import './catalogList..scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store/index.js";
import {Category} from "../../domain/Category.domain";

interface ICatalogList {
    isOpen: boolean
}

const CatalogList :FC<ICatalogList> = ({ isOpen }) => {
    const categories = useSelector<RootState, Category[]>(state => state.categories.categories);

    return (
        <div className={`catalog-list ${ isOpen ? 'catalog-list_open' : '' }`}>
            <div className="catalog-list__wrapper">
                <div className="list-block">
                    {categories.slice(0, 5).map(item => (
                        <Link to="#" className="list-item" key={item.id_category}>
                            { item.name }
                        </Link>
                    ))}
                </div>
                <div className="list-block">
                    {categories.slice(5, 10).map(item => (
                        <Link to="#" className="list-item" key={item.id_category}>
                            { item.name }
                        </Link>
                    ))}
                </div>
                <div className="list-block">
                    {categories.slice(10, 15).map(item => (
                        <Link to="#" className="list-item" key={item.id_category}>
                            { item.name }
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CatalogList;
