import React, {useState, useEffect, useContext} from 'react';

import { Link } from 'react-router-dom';

import '../scss/shopping-cart.scss';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { ProductContext } from '../contexts/ProductContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = () => {
    const [shoppingCartValue, setShoppingCartValue] = useContext(ShoppingCartContext);
    
    const [product, setProduct] = useContext(ProductContext);

    const [totalPrice, setTotalPrice] = useState('');

    useEffect(() => {
        setTotalPrice(shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price) * parseInt(curr.quantity), 0));
    }, [totalPrice]);

    const handleRemoveProduct = (id) => {
        shoppingCartValue.forEach(product => {
            if(product.id === id && product.quantity === 1) {
                const filteredItems = shoppingCartValue.filter(item => item.id !== id);
                setShoppingCartValue(filteredItems);
                setTotalPrice(shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price) * 0, 0));
            } else if (product.id === id && product.quantity > 1 ) {
                product.quantity--;
                setTotalPrice(shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price) * parseInt(curr.quantity), 0));
            } 
        });
    };

    const handleIncrementQuantity = (id) => {
        shoppingCartValue.forEach(product => {
            if(product.id === id) {
                product.quantity++;
                setTotalPrice(shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price) * parseInt(curr.quantity), 0));
            }
        })
    };

    const handleDecrementQuantity = (id) => {
        shoppingCartValue.forEach(product => {
            if(product.id === id && product.quantity > 1) {
                product.quantity--;
                setTotalPrice(shoppingCartValue.reduce((acc, curr) => acc + parseInt(curr.price) * parseInt(curr.quantity), 0));
            }
        })
    };

    return(
        <div className="container shopping-cart">
            <div className="row hor-line justify-content-around">
                <span className="col-2">Продукт</span>
                <span className="col-2">Модел</span>
                <span className="col-2">Цена</span>
                <span className="col-2">Количество</span>
                <span className="col-2">Премахни</span>
            </div>

            <div className="products">
                {
                    shoppingCartValue.map((product, index) => {
                        return(
                            <div key={index} className="row justify-content-around mb-4 product">
                                <Link to={`/product/${product.id}`} className="col-2" onClick={setProduct(product)}>
                                    <img src={product.image} className="product__img"/>
                                </Link>

                                <span className="col-2">{product.model}</span>

                                <span className="col-2">{product.price}</span>

                                <div className="col-2 flex-container">
                                    <FontAwesomeIcon icon={faMinusCircle} className="product__decrement" onClick={() => handleDecrementQuantity(product.id)}/>

                                    <span>{product.quantity}</span>

                                    <FontAwesomeIcon icon={faPlusCircle} className="product__increment" onClick={() => handleIncrementQuantity(product.id)}/>
                                </div>

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