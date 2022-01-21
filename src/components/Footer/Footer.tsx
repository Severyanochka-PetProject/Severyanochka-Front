import React from "react";

import './footer.scss';
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__logo">
                    <Link to="#">
                        <img src="/images/footer/logo.svg" alt=""/>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
