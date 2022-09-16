import React, {useMemo} from "react";
import { Link } from "react-router-dom";

import './homePage.scss';

import Banner from "../../components/Banner/Banner";
import ProductItem from "../../components/ProductItem/ProductItem";
import SpecialOfferItem from "../../components/SpecialOfferItem/SpecialOfferItem";
import LocationMap from "../../components/LocationMap/LocationMap";
import NewsArticleItem from "../../components/NewsArticleItem/NewsArticleItem";

import RenderSection from "../../hoc/RenderSection/RenderSection";
import ProductLoader from "../../components/LoaderComponents/ProductLoader/ProductLoader";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index.js";
import { Food } from "../../domain/Food.domain";

const totalRenderItems = [1, 2, 3, 4];

const HomePage = React.memo(() => {
    const products = useSelector<RootState, Food[]>(state => state.products.products);
    const isLoading = useSelector<RootState, boolean>(state => state.products.isLoading);

    return (
        <div className="page page_home">
            <Banner />
            <h1>Test 12</h1>
            <main className="main">
                <RenderSection sectionTitle="Акции" sectionLink="#" sectionClass="product-section" sectionLinkText="Все акции">
                    {isLoading
                    ?
                        totalRenderItems.map((key, index) => (
                            <ProductLoader key={key} />
                        ))
                    :
                        products.map((item, index) => (
                            <ProductItem key={index} product={item} />
                        ))
                    }
                </RenderSection>
                <RenderSection sectionTitle="Новинки" sectionLink="#" sectionClass="product-section" sectionLinkText="Все новинки">
                    {totalRenderItems.map((key, index) => (
                        <ProductLoader key={ index } />
                    ))}
                </RenderSection>
                <RenderSection sectionTitle="Покупали раньше" sectionLink="#" sectionClass="product-section" sectionLinkText="Все покупки">
                    {totalRenderItems.map((key, index) => (
                        <ProductLoader key={ index } />
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
})

export default HomePage;
