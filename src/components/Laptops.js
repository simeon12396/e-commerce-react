import React, { useContext} from 'react';

import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import LaptopPosts  from '../dummy-data/laptops.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { UnorderedList } from '../styled-components/UnorderedList';
import { Heading6 } from '../styled-components/Heading6';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { ProductContext } from '../contexts/ProductContext';

const Laptops = () => {
    const  { DELL, APPLE, ASUS } = LaptopPosts;
    
    let [shoppingCartValue, setShoppingCartValue] = useContext(ShoppingCartContext);
    let [product, setProduct] = useContext(ProductContext);

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
        <div className="row justify-content-between">
            <div className="row col-md-6 col-xl-4 justify-content-around">
                {
                    DELL.map((post, index) => {
                        return (
                            <Card className="col-xs-12 col-md-6  mt-3 mb-3" key={index}>
                                <Link to={`/product/${post.id}`} onClick={() => setProduct(post)} className="card__hyperlink--img">
                                    <Card.Img variant="top" src={post.image} />
                                </Link>

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>

                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.videoCard}</li>
                                        <li>{post.ram}</li>
                                        <li>{post.ssd}</li>
                                    </UnorderedList>

                                    <p>Цена: <span>{post.price}</span> лв</p>
                                </Card.Body>

                                <Link to={`/product/${post.id}`} className="mb-2 card__hyperlink" onClick={() => setProduct(post)}>
                                    View
                                </Link>

                                <Button variant="success" className="mb-2" onClick={ () => handleChangeValue(post.id, post.image, post.model, post.price, 1)}>
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>

            <div className="row col-md-6 col-xl-4 justify-content-around">
                {
                    APPLE.map((post, index) => {
                        return (
                            <Card className="col-xs-12 col-md-6 mt-3 mb-3" key={index}>
                                <Link to={`/product/${post.id}`} onClick={() => setProduct(post)} className="card__hyperlink--img">
                                    <Card.Img variant="top" src={post.image} />
                                </Link>

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>

                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.videoCard}</li>
                                        <li>{post.ram}</li>
                                        <li>{post.ssd}</li>
                                    </UnorderedList>

                                    <p>Цена: <span>{post.price}</span> лв</p>
                                </Card.Body>

                                <Link to={`/product/${post.id}`} className="mb-2 card__hyperlink" onClick={() => setProduct(post)}>
                                    View
                                </Link>

                                <Button variant="success" className="mb-2" onClick={ () => handleChangeValue(post.id, post.image, post.model, post.price, 1)}>
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>

            <div className="row col-md-6 col-xl-4 justify-content-around">
                {
                    ASUS.map((post, index) => {
                        return (
                            <Card className="col-xs-12 col-md-6 mt-3 mb-3" key={index}>
                                <Link to={`/product/${post.id}`} onClick={() => setProduct(post)} className="card__hyperlink--img">
                                    <Card.Img variant="top" src={post.image} />
                                </Link>

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>
                                    
                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.videoCard}</li>
                                        <li>{post.ram}</li>
                                        <li>{post.ssd}</li>
                                    </UnorderedList>

                                    <p>Цена: <span>{post.price}</span> лв</p>
                                </Card.Body>

                                <Link to={`/product/${post.id}`} className="mb-2 card__hyperlink" onClick={() => setProduct(post)}>
                                    View
                                </Link>

                                <Button variant="success" className="mb-2" onClick={ () => handleChangeValue(post.id, post.image, post.model, post.price, 1)}>
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Laptops;