import React, { useState } from "react";

import './locationMap.scss';

function LocationMap () {
    const mapList = [
        "Arbat",
        "VDNKh"
    ]

    const [currentMap, toggleMap] = useState(mapList[0]);

    const switchMap = (map : string) => {
        toggleMap(map);
    }

    return (
        <div className="location">
            <div className="location__controllers">
                <div
                    className={`controller-btn ${currentMap === mapList[0] ? 'active' : '' }`}
                    onClick={() => switchMap(mapList[0])}
                >
                    <p>м. Арбат</p>
                </div>
                <div
                    className={`controller-btn ${currentMap === mapList[1] ? 'active' : '' }`}
                    onClick={() => switchMap(mapList[1])}
                >
                    <p>м. ВДНХ</p>
                </div>
            </div>
            <div className="location__map">
                { currentMap === 'Arbat' ? (
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab1a25e0700e193d71aae1e17b68a6c7c0f1286386dc52172da54056233b6e59c&amp;source=constructor"
                            width="1210" height="410" frameBorder="0"/>
                ) : (
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A84e2028fa97d50b8c8a4662b4297b22cee0185fd6f2414a7fa64526b9a74e450&amp;source=constructor"
                        width="1210" height="410" frameBorder="0"/>
                )}
            </div>
        </div>
    )
}

export default LocationMap;
