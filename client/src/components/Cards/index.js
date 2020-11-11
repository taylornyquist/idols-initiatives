import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ALL_IDOLS } from '../../utils/queries';
// import { Link } from 'react-router-dom';
import Jumbo from '../Jumbotron'
import CategoryMenu from '../CategoryMenu'
import { Container, Row, Button, Card, CardDeck, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
// import idols from '../../utils/seed'
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../../utils/auth';
import { ADD_TO_HUB } from '../../utils/mutations';
import { saveIdolIds, getSavedIdolIds } from '../../utils/localStorage';

const Cards = () => {

    // local state or global redux state???
    // create state to hold saved idolId values in local state
    const [savedIdolIds, setSavedIdolIds] = useState(getSavedIdolIds());

    const { loading, data } = useQuery(QUERY_ALL_IDOLS);
    const idols = data?.idols || [];
    console.log(idols);

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { currentCategory } = state;
    console.log(currentCategory);

    function filterIdols() {
        if (!currentCategory || currentCategory === "clear") {
            return idols;
        };
        const filteredIdols = idols.filter(idol => idol.idol_category._id === currentCategory);
        return filteredIdols;
    };

    // set up useEffect hook to save `savedIdolIds` list to localStorage on component unmount
    // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
    // useEffect(() => {
    //     return () => saveIdolIds(savedIdolIds);
    // });

    saveIdolIds(savedIdolIds);

    const [addToHub, { error }] = useMutation(ADD_TO_HUB);

    const handleAddToHub = async (id) => {
        console.log("click");
        console.log(id);

        // get token
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            alert("You must be logged in to add idols to your hub!");
            return false;
        }

        // insert dispatch to user's hub here
        try {
            await addToHub({
                variables: { idol_id: id }
            });
            setSavedIdolIds([...savedIdolIds, id]);
        } catch (e) {
            console.error(e);
        }
    };

    return (

        <>
            <Jumbo />

            {loading ? null : <CategoryMenu />}

            <Container fluid>
                <Row className="ml-auto mr-auto">

                    {idols ? (
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
                                        <Button
                                            disabled={savedIdolIds?.some((savedIdolId) => savedIdolId === idol._id)}
                                            onClick={() => handleAddToHub(idol._id)}
                                            variant={savedIdolIds?.some((savedIdolId) => savedIdolId === idol._id)
                                                ? 'danger'
                                                : 'info'}>
                                            {savedIdolIds?.some((savedIdolId) => savedIdolId === idol._id)
                                                ? 'Added To Hub'
                                                : 'Add To Hub'}
                                        </Button>{' '}
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

export default Cards;


