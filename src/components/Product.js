import React, { useState, useContext } from 'react';

import '../scss/product.scss';

import { ProductContext } from '../contexts/ProductContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPhoneVolume, faCheck, faMoneyCheckAlt, faUndoAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Product = (props) => {
    let [product, setProduct] = useContext(ProductContext);

    let [shoppingCartValue, setShoppingCartValue] = useContext(ShoppingCartContext);

    const handleChangeValue = (id, image, model, price, quantity) => {
        const actualProduct = {
            id,
            image,
            model,
            price,
            quantity
        };

        if(shoppingCartValue.length === 0) {
            setShoppingCartValue([...shoppingCartValue, actualProduct]);
        } else {
            const itContainsProduct = shoppingCartValue.find(product => product.id === id);

            if(itContainsProduct) {
                itContainsProduct.quantity++;
            } else {
                setShoppingCartValue([...shoppingCartValue, actualProduct]);
            };
        };
    };

    return(
        <div className="product">
            {
                (product.id > 12) ?
                (
                    <div className="container">
                        <h1 className="product__heading">{product.model}</h1>

                        <div className="mt-5 product__image-wrapper">
                            <img src={product.image} className="product__image" />
                        </div>

                        <div className="product__btn-wrapper mb-2 mt-5">
                            <Button variant="success" className="mb-2" onClick={() => handleChangeValue(product.id, product.image, product.model, product.price, 1)}>
                                <FontAwesomeIcon icon={ faCartPlus }/>
                            </Button>
                        </div>

                        <ul className="product__options">
                            <li>
                                <FontAwesomeIcon icon={faTruck} />

                                <h5>безплатна доставка</h5>

                                при поръчка над 19.99лв
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faPhoneVolume} />

                                <h5>24/7 безплатна консултация</h5>

                                чат, телефон или имейл
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faCheck} />

                                <h5>проверка на пратка</h5>

                                при наложен платеж
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} />

                                <h5>експресна доставка</h5>

                                до 1 работен ден
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faUndoAlt} />

                                <h5>право на връщане</h5>

                                до 30 дни след покупката
                            </li>
                        </ul>

                        <h5 className="text-center mb-3">Пълни характеристики:</h5>

                        <Table striped bordered hover variant="dark" className="product__table">
                            <tbody>
                                <tr>
                                    <td>Модел: </td>
                                    <td>{product.model}</td>
                                </tr>

                                <tr>
                                    <td>Процесор: </td>
                                    <td>{product.processor}</td>
                                </tr>

                                <tr>
                                    <td>Дисплей: </td>
                                    <td>{product.display}</td>
                                </tr>

                                <tr>
                                    <td>Батерия: </td>
                                    <td>{product.battery}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                ) :
                (
                    <div className="container">
                        <h1 className="product__heading">{product.model}</h1>

                        <div className="row align-items-center justify-content-center mt-5 product_img-wrapper">
                            <img src={product.image} className="product__image col-6" />
                        </div>

                        <div className="product__btn-wrapper mb-2 mt-5">
                            <Button variant="success" className="mb-2" onClick={() => handleChangeValue(product.id, product.image, product.model, product.price, 1)}>
                                <FontAwesomeIcon icon={ faCartPlus }/>
                            </Button>
                        </div>

                        <ul className="product__options">
                            <li>
                                <FontAwesomeIcon icon={faTruck} />

                                <h5>безплатна доставка</h5>

                                при поръчка над 19.99лв
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faPhoneVolume} />

                                <h5>24/7 безплатна консултация</h5>

                                чат, телефон или имейл
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faCheck} />

                                <h5>проверка на пратка</h5>

                                при наложен платеж
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faMoneyCheckAlt} />

                                <h5>експресна доставка</h5>

                                до 1 работен ден
                            </li>

                            <li>
                                <FontAwesomeIcon icon={faUndoAlt} />

                                <h5>право на връщане</h5>

                                до 30 дни след покупката
                            </li>
                        </ul>

                        <h5 className="text-center mb-3">Пълни характеристики:</h5>

                        <Table striped bordered hover variant="dark" className="product__table">
                            <tbody>
                                <tr>
                                    <td>Модел: </td>
                                    <td>{product.model}</td>
                                </tr>

                                <tr>
                                    <td>Процесор: </td>
                                    <td>{product.processor}</td>
                                </tr>

                                <tr>
                                    <td>Рам памет: </td>
                                    <td>{product.ram}</td>
                                </tr>

                                <tr>
                                    <td>Видеокарта: </td>
                                    <td>{product.videoCard}</td>
                                </tr>

                                <tr>
                                    <td>SSD: </td>
                                    <td>{product.ssd}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </div>
    )
};

export default Product;