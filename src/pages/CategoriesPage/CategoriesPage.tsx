import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

import './categoriesPage.scss';

import { Category } from '../../domain/Category.domain';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index.js';
import Loader from "../../components/LoaderComponents/Loader/Loader";

const CategoriesPage : FC = () => {
    const isLoading = useSelector<RootState, boolean>(state => state.categories.isLoading);
    const categories = useSelector<RootState, Category[]>(state => state.categories.categories)
    
    const linkHref = (slagName: string): string => {
        return `/${slagName}`;
    }

    return (
        <div className="page categories-page">
            <main className="main">
                <h1>Каталог</h1>
                <div className={`categories-wrapper ${ isLoading ? 'categories-wrapper_loading' : ''}`}>
                    {!isLoading ? categories.map((x: Category, index) => (
                        <Link to={linkHref(x.slag)} className="categories-item" key={ index }>
                            <div className="categories-item__text">
                                <p>{ x.name }</p>
                            </div>
                            <img src={x.img_hash} alt=""/>
                        </Link>
                    )) : <Loader />
                    }
                    {/* <Link to="#" className="categories-item categories-item_large-start">
                        <div className="categories-item__text">
                            <p>Молоко, сыр, яйцо</p>
                        </div>
                        <img src="/images/categories/1.png" alt=""/>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/2.png" alt=""/>
                        <div className="categories-item__text orange-bg">
                            <p>Хлеб</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/3.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Фрукты и овощи</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/4.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Замороженные продукты</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/5.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Напитки</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/6.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Кондитерские изделия</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/7.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Чай, кофе</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/8.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Бакалея</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/9.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Здоровое питание</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item categories-item_large-end">
                        <img src="/images/categories/10.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Зоотовары</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/11.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Детское питание</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item categories-item_large-middle">
                        <img src="/images/categories/12.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Мясо, птица, колбаса</p>
                        </div>
                    </Link>
                    <Link to="#" className="categories-item">
                        <img src="/images/categories/13.png" alt=""/>
                        <div className="categories-item__text">
                            <p>Непродовольственные товары</p>
                        </div>
                    </Link> */}
                </div>
            </main>
        </div>
    );
};

export default CategoriesPage;
