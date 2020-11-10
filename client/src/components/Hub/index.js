import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Button, Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';
import idols from '../../utils/seed'
import { useParams } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_MY_IDOLS } from '../../utils/queries';


const Hub = () => {

    const { username: useParam } = useParams();

    const { loading, data } = useQuery(QUERY_MY_IDOLS);

    const idols = data?.me.idols || [];
    console.log(idols)

    const removeToHub = () => {
        console.log("click");
        // insert dispatch to remove from user's hub here
    };

    if(loading) {
        return <div>Loading...</div>
    }

    return (

        <>

            <Container fluid className="mt-3">
                
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
                                        <Button onClick={removeToHub} variant="info">Add To Hub</Button>{' '}
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

export default Hub;