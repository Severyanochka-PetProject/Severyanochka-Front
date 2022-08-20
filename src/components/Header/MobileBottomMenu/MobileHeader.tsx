import React, { FC } from 'react'

import './mobileHeader.scss';

import HeaderProfileBlock from '../HeaderProfileBlock/HeaderProfileBlock';
import HeaderControllers from "../HeaderControllers/HeaderControllers";

const MobileBottomMenu: FC = () => {
    return (
        <div className="mobile-bottom-menu">
            <div className="mobile-bottom-menu__wrapper">
                <HeaderControllers showCatalogController={true}>
                    <HeaderProfileBlock/>
                </HeaderControllers>
            </div>
        </div>
    )
};

export default MobileBottomMenu;
