import React from 'react';

import '../scss/header.scss';

import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <Link to="/laptops" className="header-hyperlink">Laptops</Link>

            <Link to="/smartphones" className="header-hyperlink">Smartphones</Link>
        </div>
    )
};

export default Header
