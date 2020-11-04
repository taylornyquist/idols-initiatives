import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Cards = () => {

    return (

        <Container>
            <Row>

                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src='/images/lebron.jpg' />
                        <Card.Body>
                            <Card.Title>Lebron James Family Foundation</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="https://www.lebronjamesfamilyfoundation.org/">
                                Details
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src='/images/lebron.jpg' />
                        <Card.Body>
                            <Card.Title>Card title that wraps to a new line</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="bg-dark text-white">
                        <Card.Img src='/images/lebron.jpg' alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Lebron James Family Foundation</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.ImgOverlay>
                    </Card>
                </Col>

            </Row>




        </Container>

    );
};

export default Cards;


