import React, { useContext} from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import LaptopPosts  from '../dummy-data/laptops.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { UnorderedList } from '../styled-components/UnorderedList';
import { Heading6 } from '../styled-components/Heading6';

import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const Laptops = () => {
    const  { DELL, APPLE, ASUS } = LaptopPosts;
    
    let [shoppingCartValue, setShoppingCartValue] = useContext(ShoppingCartContext);
    
    const handleChangeValue = (image, model, price, quantity) => {
        const actualProduct = {
            image,
            model,
            price,
            quantity
        };

        setShoppingCartValue([...shoppingCartValue, actualProduct]);
    }

    return(
        <div className="row justify-content-between">
            <div className="row col-4 justify-content-around">
                {
                    DELL.map((post, index) => {
                        return (
                            <Card className="col-6  mt-3 mb-3" key={index}>
                                <Card.Img variant="top" src={post.image} />

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

                                <Button variant="primary" className="mb-2">View</Button>

                                <Button variant="success" className="mb-2" onClick={ () => handleChangeValue(post.image, post.model, post.price, 1)}>
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>

            <div className="row col-4 justify-content-around">
                {
                    APPLE.map((post, index) => {
                        return (
                            <Card className="col-6 mt-3 mb-3" key={index}>
                                <Card.Img variant="top" src={post.image} />

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>

                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.videoCard}</li>
                                        <li>{post.ram}</li>
                                        <li>{post.ssd}</li>
                                    </UnorderedList>

                                    <p>Price: <span>{post.price}</span></p>
                                </Card.Body>

                                <Button variant="primary" className="mb-2">View</Button>

                                <Button variant="success" className="mb-2" onClick={ () => handleChangeValue(post.image, post.model, post.price, 1)}>
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>

            <div className="row col-4 justify-content-around">
                {
                    ASUS.map((post, index) => {
                        return (
                            <Card className="col-6 mt-3 mb-3" key={index}>
                                <Card.Img variant="top" src={post.image} />

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>
                                    
                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.videoCard}</li>
                                        <li>{post.ram}</li>
                                        <li>{post.ssd}</li>
                                    </UnorderedList>

                                    <p>Price: <span>{post.price}</span></p>
                                </Card.Body>

                                <Button variant="primary" className="mb-2">View</Button>

                                <Button variant="success" className="mb-2" onClick={ () => handleChangeValue(post.image, post.model, post.price, 1)}>
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