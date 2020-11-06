import React from 'react';
// import { Link } from 'react-router-dom';
import Jumbo from '../Jumbotron'
import { Container, Row, Button, Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';
import idols from '../../utils/seed'
import TwitterIcon from '@material-ui/icons/Twitter';

const Cards = () => {

    const addToHub = () => {
        console.log("click");
        // insert dispatch to user's hub here
    };

    return (

        <>
            <Jumbo />

            <Container fluid>
                <Row className="ml-auto mr-auto">




                    {idols ? (
                        <>
                            {idols.map((idol) => (

                                <CardDeck sm={12} md={6} lg={4} xl={3} className=" ml-auto mr-auto" key={idol.name}>
                                    <Card className="mr-4 mt-2 mb-4" style={{ width: '20rem' }}>
                                        <Card.Img variant="top" src={`/images/${idol.image}`} />
                                        <Card.Body>
                                            <Card.Title>{idol.name}</Card.Title>
                                            <Card.Title>{idol.charity}</Card.Title>
                                            <Card.Text>{idol.description}</Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>{idol.hometown}</ListGroupItem>
                                        </ListGroup>
                                        <Card.Body>
                                            <Card.Link href={idol.charity_url} target="_blank" rel="noopener noreferrer">
                                                Learn More
                                                </Card.Link>

                                            {idol.twitter_url && (
                                                <Card.Link className="float-right" href={idol.twitter_url} target="_blank" rel="noopener noreferrer">
                                                    <TwitterIcon />
                                                </Card.Link>
                                            )}

                                        </Card.Body>
                                        <Button onClick={addToHub} variant="info">Add To Hub</Button>{' '}
                                    </Card>
                                </CardDeck>

                            ))}
                        </>
                    ) : <h2>No Idols Yet</h2>}


                </Row>

            </Container>
        </>
    );
};

export default Cards;


