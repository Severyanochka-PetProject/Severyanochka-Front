import React, {FC, ReactNode} from 'react';
import {Link} from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";

import './renderSection.scss';

interface IRenderSection {
    children: ReactNode,
    sectionTitle: string,
    sectionLink?: string | null
    sectionLinkText?: string | null
}

const RenderSection: FC <IRenderSection> = ({ sectionLink, sectionTitle, children, sectionLinkText }) => {

    return (
        <section className="section">
            <div className="section__header">
                <h2>{ sectionTitle }</h2>
                { sectionLink &&
                    <Link to={sectionLink}>
                        { sectionLinkText }
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L7.35355 6.64645C7.54882 6.84171 7.54882 7.15829 7.35355 7.35355L1.35355 13.3536C1.15829 13.5488 0.841709 13.5488 0.646447 13.3536C0.451184 13.1583 0.451184 12.8417 0.646447 12.6464L6.29289 7L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z" fill="#606060"/>
                        </svg>
                    </Link>
                }
            </div>
            <div className="section__content">
                { children }
            </div>
        </section>
    );
};

export default RenderSection;
