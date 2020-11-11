import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ALL_IDOLS } from '../../utils/queries';
// import { Link } from 'react-router-dom';
import Jumbo from '../Jumbotron'
import CategoryMenu from '../CategoryMenu'
import { Jumbotron, Container, Row, Button, Card, CardDeck, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
// import idols from '../../utils/seed'
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import { QUERY_MY_IDOLS } from '../../utils/queries';

const Hub = () => {

    // change this to QUERY_MY_IDOLS or QUERY_ME???
    const { loading, data } = useQuery(QUERY_MY_IDOLS);
    const myIdols = data?.me.idols;
    console.log(myIdols);

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { currentCategory } = state;
    console.log(currentCategory);

    function filterIdols() {
        if (!currentCategory || currentCategory === "clear") {
            return myIdols;
        };
        const filteredIdols = myIdols.filter(idol => idol.idol_category._id === currentCategory);
        return filteredIdols;
    };

    const removeFromHub = () => {
        console.log("click");
        // insert dispatch to remove from user's hub here
    };

    return (

        <>
            <Jumbotron className="py-4">
                <h1 className="text-seconary">My Hub</h1>
            </Jumbotron>

            <CategoryMenu />

            <Container fluid>
                <Row className="ml-auto mr-auto">

                    {myIdols ? (
                        <>
                            {filterIdols().map((idol) => (

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
                                        <Button onClick={removeFromHub} variant="info">Remove From Hub</Button>{' '}
                                    </Card>
                                </CardDeck>

                            ))}
                        </>
                    ) : (
                            <h1 className="text-secondary mt-3 ml-auto mr-auto">No Idols Yet</h1>
                        )}
                    {loading ?
                        <>
                            <Container fluid className="text-center">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </Container>
                        </> : null}

                </Row>
            </Container>
        </>
    );
};

export default Hub;