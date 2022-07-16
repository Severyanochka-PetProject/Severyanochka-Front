import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import './categoriesPage.scss';

import { Category } from '../../domain/Category.domain';
import { categoryInitialState } from '../../types/category';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
    const categories = useSelector<RootState, Category[]>(state => state.category.categories)

    return (
        <div className="page categories-page">
            <Header/>
            <main className="main">
                <h1>Каталог</h1>
                <div className="categories-wrapper">
                    {categories.map((x: any, index) => (
                        <Link to="#" className="categories-item" key={ index }>
                            <div className="categories-item__text">
                                <p>{ x.name }</p>
                            </div>
                            <img src={x.img_hash} alt=""/>
                        </Link>
                    ))
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
            <Footer />
        </div>
    );
};

export default CategoriesPage;
