import React, {useContext} from 'react';

import '../scss/shopping-cart.scss';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
    const [shoppingCartValue, setShoppingCatValue] = useContext(ShoppingCartContext);
    
    const totalPrice = shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price), 0);

    return(
        <div className="container">
            <div className="row hor-line justify-content-around">
                <span className="col-2">Продукт</span>
                <span className="col-2">Модел</span>
                <span className="col-2">Цена</span>
                <span className="col-2">Количество</span>
                <span className="col-2">Междинна сума</span>
                <span className="col-2">Премахни</span>
            </div>

            <div className="products">
                {
                    shoppingCartValue.map((product, index) => {
                        return(
                            <div key={index} className="row justify-content-around mb-4 product">
                                <img src={product.image} className="col-2" />
                                <span className="col-2">{product.model}</span>
                                <span className="col-2">{product.price}</span>
                                <span className="col-2">1</span>
                                <span className="col-2">{product.price}</span>
                                <span className="col-2">
                                    <FontAwesomeIcon icon={faTrashAlt} className="product__remove"/>
                                </span>
                            </div>
                        )
                    })
                }
            </div>

            <p className="total-price">Крайна сума: <span>{totalPrice}</span> лв</p>
        </div>
    )
}

export default ShoppingCart;