import React from 'react';

import '../scss/accordions.scss';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Accordions = () => {
    return(
        <div className="accordions row mt-5">
            <Accordion defaultActiveKey="0" className="col-3 col-sm-12 col-md-6 col-lg-6">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FontAwesomeIcon icon={faCaretDown} />

                            <span>Марка</span>
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <input type="checkbox" name="dell" value="dell" className="accordions__input" id="del"/>

                            <label htmlFor="del">DELL</label>

                            <input type="checkbox" name="apple" value="apple" className="accordions__input" id="apple"/> 

                            <label htmlFor="apple">APPLE</label>

                            <input type="checkbox" name="asus" value="asus" className="accordions__input" id="asus"/> 

                            <label htmlFor="asus">ASUS</label>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="0" className="col-4 col-sm-12 col-md-6 col-lg-6">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FontAwesomeIcon icon={faCaretDown} />

                            <span>Процесор</span>
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <input type="checkbox" name="intel core i9" value="intel core i9" className="accordions__input" id="intel core i9"/> 

                            <label htmlFor="intel core i9">Intel Core i9</label>

                            <input type="checkbox" name="intel core i7" value="intel core i7" className="accordions__input" id="intel core i7"/> 

                            <label htmlFor="intel core i7">Intel core i7</label>

                            <input type="checkbox" name="intel core i5" value="intel core i5" className="accordions__input" id="intel core i5"/>

                            <label htmlFor="intel core i5">Intel Core i5</label>

                            <input type="checkbox" name="amd ryzen" value="amd ryzen" className="accordions__input" id="amd ryzen"/> 

                            <label htmlFor="amd ryzen">AMD Ryzen</label>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="0" className="col-2 col-sm-12 col-md-6 col-lg-6">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FontAwesomeIcon icon={faCaretDown} />

                            <span>Рам памет</span>
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <input type="checkbox" name="8gb" value="8gb" className="accordions__input" id="8gb"/> 

                            <label htmlFor="8gb">8GB</label>

                            <input type="checkbox" name="16gb" value="16gb" className="accordions__input" id="16gb"/> 

                            <label htmlFor="16gb">16GB</label>

                            <input type="checkbox" name="32gb" value="32gb" className="accordions__input" id="32gb"/> 

                            <label htmlFor="32gb">32GB</label>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <Accordion defaultActiveKey="0" className="col-3 col-sm-12 col-md-6 col-lg-6">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <FontAwesomeIcon icon={faCaretDown} />

                            <span>SSD</span>
                        </Accordion.Toggle>
                    </Card.Header>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <input type="checkbox" name="128gb" value="128gb" className="accordions__input" id="128gb"/> 

                            <label htmlFor="128gb">128GB</label>

                            <input type="checkbox" name="256gb" value="256gb" className="accordions__input" id="256gb"/> 

                            <label htmlFor="256gb">256GB</label>

                            <input type="checkbox" name="500gb" value="500gb" className="accordions__input" id="500gb"/> 

                            <label htmlFor="500gb">над 500GB</label>

                            <input type="checkbox" name="1tb" value="1tb" className="accordions__input" id="32gb"/> 

                            <label htmlFor="32gb">32GB</label>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
};

export default Accordions;