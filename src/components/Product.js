import React, { useState, useContext } from 'react';

import Laptops  from '../dummy-data/laptops.json';
import Smartphones from '../dummy-data/smartphones.json';

import { ProductContext } from '../contexts/ProductContext';

const Product = () => {
    let [product, setProduct] = useContext(ProductContext);
    console.log(product)
    return(
        <div className="product">
            
        </div>
    )
};

export default Product;