import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ALL_IDOLS } from '../../utils/queries';
import { ADD_TO_HUB } from '../../utils/mutations';
// import { Link } from 'react-router-dom';
import Jumbo from '../Jumbotron'
import CategoryMenu from '../CategoryMenu'
import { Container, Row, Button, Card, CardDeck, ListGroup, ListGroupItem, Spinner } from 'react-bootstrap';
// import idols from '../../utils/seed'
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, useSelector } from 'react-redux';

// testing only...
// const deleteMeLater = {
//     name: "Cristiano Ronoldo",
//     charity: "Lebron James Family Foundation",
//     description: "Ronaldo is an ambassador for three major charities - Save the Children, Unicef and World Vision",
//     hometown: "Funchal, Portugal",
//     charity_url: "https://www.savethechildren.org/",
//     image: "cristiano.jpg",
//     twitter_url: "https://twitter.com/Cristiano",
//     idol_category: categories[1]._id
// };

const Cards = () => {

    const { loading, data } = useQuery(QUERY_ALL_IDOLS);
    const idols = data?.idols;
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

    const [addToHub, { error }] = useMutation(ADD_TO_HUB);

    const handleAddToHub = async (id) => {
        console.log("click");
        console.log(id);
        // insert dispatch to user's hub here
        try {
            await addToHub({
                variables: { idol_id: id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (

        <>
            <Jumbo />
            <CategoryMenu />

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
                                        <Button onClick={() => handleAddToHub(idol._id)} variant="info">Add To Hub</Button>{' '}
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


