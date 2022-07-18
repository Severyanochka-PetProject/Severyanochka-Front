import React from "react";
import { Link } from "react-router-dom";

import './homePage.scss';

import Banner from "../../components/Banner/Banner";
import ProductItem from "../../components/ProductItem/ProductItem";
import SpecialOfferItem from "../../components/SpecialOfferItem/SpecialOfferItem";
import LocationMap from "../../components/LocationMap/LocationMap";
import NewsArticleItem from "../../components/NewsArticleItem/NewsArticleItem";

import RenderSection from "../../hoc/RenderSection/RenderSection";

function HomePage () {
    return (
        <div className="page page_home">
            <Banner />
            <main className="main">
                <RenderSection sectionTitle="Акции" sectionLink="#" sectionClass="product-section" sectionLinkText="Все акции">
                    {[1, 2, 3, 4].map((key, index) => (
                            <ProductItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Новинки" sectionLink="#" sectionClass="product-section" sectionLinkText="Все новинки">
                    {[1, 2, 3, 4].map((key, index) => (
                        <ProductItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Покупали раньше" sectionLink="#" sectionClass="product-section" sectionLinkText="Все покупки">
                    {[1, 2, 3, 4].map((key, index) => (
                        <ProductItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Специальные предложения">
                    {[1, 2].map((key, index) => (
                        <SpecialOfferItem key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Наши магазины" >
                    <LocationMap />
                </RenderSection>
                <RenderSection sectionId="news-section" sectionTitle="Статьи" sectionLink="#" sectionLinkText="Все статьи">
                    {[1, 2, 3].map(( index) => (
                        <NewsArticleItem key={ index } />
                    ))}
                </RenderSection>
            </main>
        </div>
    )
}

export default HomePage;
