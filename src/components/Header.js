import React, { useContext } from 'react';

import '../scss/header.scss';

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Badge from 'react-bootstrap/Badge'

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const Header = () => {

    const [shoppingCartValue, setShoppingCartValue] = useContext(ShoppingCartContext);

    return (
        <div className="header row justify-content-center">
            <Link to="/laptops" className="header-hyperlink">Laptops</Link>

            <Link to="/smartphones" className="header-hyperlink">Smartphones</Link>

            <Link to="/shopping-cart" className="header-hyperlink header-hyperlink--cart">
                <FontAwesomeIcon icon={ faShoppingCart }/>

                <Badge variant="light">{shoppingCartValue.length}</Badge>
            </Link>
        </div>
    )
};

export default Header
