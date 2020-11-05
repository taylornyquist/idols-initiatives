import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import idols from '../../utils/seed'

const Hub = () => {

    const removeFromHub = () => {
        console.log("click");
        // insert dispatch to remove from user's hub here
    };

    return (

        <>

            <Container className="mt-3">
                <Row>

                    {idols ? (
                        <>
                            {idols.map((idol) => (

                                <Col md={4} key={idol.name} className="mb-3">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={`/images/${idol.image}`} />
                                        <Card.Body>
                                            <Card.Title>{idol.name}</Card.Title>
                                            <Card.Text>
                                                {idol.description}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>{idol.city}</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href={idol.url} target="_blank" rel="noopener noreferrer">
                                                Learn More
                                        </Card.Link>
                                        </Card.Body>
                                        <Button onClick={removeFromHub} variant="info">Remove From Hub</Button>{' '}
                                    </Card>
                                </Col>

                            ))}
                        </>
                    ) : <h2>No Idols Yet</h2>}

                </Row>

            </Container>
        </>
    );
};

export default Hub;

