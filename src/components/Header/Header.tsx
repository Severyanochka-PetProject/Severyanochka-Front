import React, {FC, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import './header.scss';

import CatalogList from "../CatalogList/CatalogList";
import HeaderProfileBlock from "./HeaderProfileBlock/HeaderProfileBlock";
import HeaderControllers from "./HeaderControllers/HeaderControllers";

const Header: FC = () => {
    const [isOpenCatalogList, toggleCatalogList] = useState(false)
    const [currentWidth, setCurrentWidth] = useState(0)

    useEffect(() => {
        setCurrentWidth(window.innerWidth);

        const resizeListener = () => {
            setCurrentWidth(window.innerWidth)
          };

        window.addEventListener('resize', resizeListener);

        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])

    useEffect(() => {
        const $layout = document.querySelector('.list-layout')!;
        if (isOpenCatalogList) {

            $layout.addEventListener('click', autoCloseList);
        }

        return () => {
            $layout.removeEventListener('click', autoCloseList)
        }
    }, [isOpenCatalogList])

    const autoCloseList = (event: Event) => {
        const target = event.target as HTMLDivElement;
        if (target.classList.contains("list-layout")) {
            toggleCatalogList(false);
        }
    }

    const renderLogo = () => {
        return <>
            <img src={currentWidth >= 1040
                ? "/images/header/logo.svg"
                : "/images/header/logo-adapting.svg"} alt=""/>
        </>
    };

    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="header-wrapper__logo">
                        <Link to="/">
                            { renderLogo() }
                        </Link>
                    </div>
                <div className="header-wrapper__filter">
                        <div className="filter-options">
                            <img onClick={() => toggleCatalogList(!isOpenCatalogList)} src="/images/header/burger-filter.svg" alt=""/>
                            <Link to="/categories">Каталог</Link>
                        </div>
                        <div className="filter-input">
                            <input type="text" placeholder="Найти товар" />
                            <img src="/images/header/filter-search.svg" alt=""/>
                        </div>
                    </div>
                    <HeaderControllers />
                    <HeaderProfileBlock />
                </div>
            <CatalogList isOpen={isOpenCatalogList} toggleOpenList={toggleCatalogList} />
            <span className={`list-layout ${ !isOpenCatalogList ? 'list-layout__hidden' : '' }`} />
        </header>
    )
};

export default Header;
