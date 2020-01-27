import React, {useContext} from 'react';

import '../scss/shopping-cart.scss';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ShoppingCart = () => {
    const [shoppingCartValue, setShoppingCatValue] = useContext(ShoppingCartContext);
    
    return(
        <div className="container">
            <div className="row hor-line justify-content-around">
                <span className="col-2">Product</span>
                <span className="col-2">Model</span>
                <span className="col-2">Price</span>
                <span className="col-2">Quantity</span>
                <span className="col-2">Subtotal</span>
                <span className="col-2">Remove</span>
            </div>

            <div className="row justify-content-around">
                {
                    shoppingCartValue.map((product, index) => {
                        return(
                            <div key={index}>
                                <img src={product.image} className="col-2" />
                                <span className="col-2">{product.model}</span>
                                <span className="col-2">{product.price}</span>
                                <span className="col-2">1</span>
                                <span className="col-2">{product.price}</span>
                                <span className="col-2">remove</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShoppingCart;