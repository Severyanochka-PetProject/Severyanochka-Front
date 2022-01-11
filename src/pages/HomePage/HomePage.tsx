import React from "react";
import { Link } from "react-router-dom";

import './homePage.scss';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import ProductItem from "../../components/ProductItem/ProductItem";
import SpecialOfferItem from "../../components/SpecialOfferItem/SpecialOfferItem";
import LocationMap from "../../components/LocationMap/LocationMap";
import NewsArticleItem from "../../components/NewsArticleItem/NewsArticleItem";
import Footer from "../../components/Footer/Footer";

function HomePage () {
    return (
        <div className="page page_home">
            <Header />
            <Banner />
            <main className="main">
                <section className="section">
                    <div className="section__header">
                        <h2>Акции</h2>
                        <Link to="#">
                            Все акции
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#606060"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="section__content">
                        {[1, 2, 3, 4].map((key, index) => (
                            <ProductItem key={ index } />
                        ))}
                    </div>
                </section>
                <section className="section">
                    <div className="section__header">
                        <h2>Новинки</h2>
                        <Link to="#">
                            Все новинки
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#606060"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="section__content">
                        {[1, 2, 3, 4].map((key, index) => (
                            <ProductItem key={ index } />
                        ))}
                    </div>
                </section>
                <section className="section">
                    <div className="section__header">
                        <h2>Покупали раньше</h2>
                        <Link to="#">
                            Все покупки
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#606060"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="section__content">
                        {[1, 2, 3, 4].map((key, index) => (
                            <ProductItem key={ index } />
                        ))}
                    </div>
                </section>
                <section className="section">
                    <div className="section__header">
                        <h2>Специальные предложения</h2>
                    </div>
                    <div className="section__content">
                        {[1, 2].map((key, index) => (
                            <SpecialOfferItem key={ index } />
                        ))}
                    </div>
                </section>
                <section className="section">
                    <div className="section__header">
                        <h2>Наши магазины</h2>
                    </div>
                    <div className="section__content">
                        <LocationMap />
                    </div>
                </section>
                <section className="section">
                    <div className="section__header">
                        <h2>Статьи</h2>
                        <Link to="#">
                            Все статьи
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#606060"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="section__content">
                        {[1, 2, 3].map(( index) => (
                            <NewsArticleItem key={ index } />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;
