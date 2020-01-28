import React, {useState, useContext} from 'react';

import '../scss/shopping-cart.scss';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import NumericInput from 'react-numeric-input';

const ShoppingCart = () => {
    const [shoppingCartValue, setShoppingCatValue] = useContext(ShoppingCartContext);
    
    const totalPrice = shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price) * parseInt(curr.quantity), 0);

    const handleRemoveProduct = (id) => {
        shoppingCartValue.forEach(product => {
            if(product.id === id && product.quantity === 1) {
                const filteredItems = shoppingCartValue.filter(item => item.id !== id)
                setShoppingCatValue(filteredItems)
            } else if (product.id === id && product.quantity > 1 ) {
                product.quantity--;
            };
        });
    };

    return(
        <div className="container shopping-cart">
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
                                <span className="col-2">
                                    <NumericInput min={1} max={100} value={product.quantity}/>
                                </span>
                                <span className="col-2">{product.price}</span>
                                <span className="col-2">
                                    <FontAwesomeIcon icon={faTrashAlt} className="product__remove" onClick={() => handleRemoveProduct(product.id)}/>
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