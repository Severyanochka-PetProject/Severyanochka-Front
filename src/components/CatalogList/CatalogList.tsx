import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import "./catalogList..scss";

import {RootState} from "../../store/index.js";
import {Category} from "../../domain/Category.domain";

import Loader from "../LoaderComponents/Loader/Loader";

interface ICatalogList {
    isOpen: boolean,
    toggleOpenList: (value: boolean) => void
}

const CatalogList :FC<ICatalogList> = React.memo(({ isOpen, toggleOpenList }) => {
    const isLoading = useSelector<RootState, boolean>(state => state.categories.isLoading);
    const categories = useSelector<RootState, Category[]>(state => state.categories.categories);

    const navigation = useNavigate();

    const goTo = (path: string) => {
        toggleOpenList(false);
        navigation(path)
    }

    return (
        <div className={`catalog-list ${ isOpen ? 'catalog-list_open' : "" }`}>
            {!isLoading ?
                <div className="catalog-list__wrapper">
                    <div className="list-block">
                        {categories.slice(0, 5).map(item => (
                            <p onClick={() => goTo(item.slag)} className="list-item" key={item.id_category}>
                                { item.name }
                            </p>
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
                :
                <Loader className="catalog-list__loader"/>
            }
        </div>
    );
});

export default CatalogList;
