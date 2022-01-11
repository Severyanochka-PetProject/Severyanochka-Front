import React from "react";

import './newsArticleItem.scss';

function NewsArticleItem () {
    return (
        <div className="article">
            <div className="article__image">
                <img src="/images/articleItem/image.png" alt="изображение"/>
            </div>
            <div className="article__wrapper">
                <small>05.03.2021</small>
                <p className="article__title">Режим использования масок и перчаток на территории магазинов</p>
                <p className="article__text">Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.</p>
                <div className="article__btn">
                    <p>Подробнее</p>
                </div>
            </div>
        </div>
    )
}

export default NewsArticleItem;
