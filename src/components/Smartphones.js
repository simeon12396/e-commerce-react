import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import SmartphonePosts  from '../dummy-data/smartphones.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import { UnorderedList } from '../styled-components/UnorderedList';
import { Heading6 } from '../styled-components/Heading6';

const Smartphones = () => {
    const  { APPLE, SAMSUNG, HUAWEI } = SmartphonePosts;
    
    return(
        <div className="row justify-content-between">
            <div className="row col-4 justify-content-around">
                {
                    APPLE.map((post, index) => {
                        return (
                            <Card className="col-5  mt-3 mb-3" key={index}>
                                <Card.Img variant="top" src={post.image} />

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>

                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.display}</li>
                                        <li>{post.battery}</li>
                                    </UnorderedList>

                                    <p>Price: <span>{post.price}</span></p>
                                </Card.Body>

                                <Button variant="primary" className="mb-2">View</Button>
                                
                                <Button variant="success" className="mb-2">
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>

            <div className="row col-4 justify-content-around">
                {
                    SAMSUNG.map((post, index) => {
                        return (
                            <Card className="col-5 mt-3 mb-3" key={index}>
                                <Card.Img variant="top" src={post.image} />

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>

                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.display}</li>
                                        <li>{post.battery}</li>
                                    </UnorderedList>

                                    <p>Price: <span>{post.price}</span></p>
                                </Card.Body>

                                <Button variant="primary" className="mb-2">View</Button>
                                <Button variant="success" className="mb-2">
                                    <FontAwesomeIcon icon={ faCartPlus }/>
                                </Button>
                            </Card>
                        )
                    })
                }
            </div>

            <div className="row col-4 justify-content-around">
                {
                    HUAWEI.map((post, index) => {
                        return (
                            <Card className="col-5 mt-3 mb-3" key={index}>
                                <Card.Img variant="top" src={post.image} />

                                <Card.Body>
                                    <Heading6>{post.model}</Heading6>

                                    <UnorderedList>
                                        <li>{post.processor}</li>
                                        <li>{post.display}</li>
                                        <li>{post.battery}</li>
                                    </UnorderedList>

                                    <p>Price: <span>{post.price}</span></p>
                                </Card.Body>

                                <Button variant="primary" className="mb-2">View</Button>
                                <Button variant="success" className="mb-2">Add to cart</Button>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Smartphones;