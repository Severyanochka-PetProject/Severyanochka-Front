import React from "react";

import './locationMap.scss';

function LocationMap () {
    return (
        <div className="location">
            <div className="location__controllers">
                <div className="controller-btn active">
                    <p>м. Арбат</p>
                </div>
                <div className="controller-btn">
                    <p>м. ВДНХ</p>
                </div>
            </div>
            <div className="location__map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1a25e0700e193d71aae1e17b68a6c7c0f1286386dc52172da54056233b6e59c&amp;source=constructor"
                width="1210" height="410" frameBorder="0"/>
            </div>
        </div>
    )
}

export default LocationMap;
