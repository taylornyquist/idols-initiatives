import React from 'react';
// import { Link } from 'react-router-dom';
import Jumbo from '../Jumbotron'
import { Container, Row, Button, Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const idols = [
    {
        name: "Lebron James",
        charity: "Lebron James Family Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://www.lebronjamesfamilyfoundation.org/",
        image: "lebron.jpg"
    },
    {
        name: "Cristiano Ronoldo",
        charity: "Lebron James Family Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://www.lebronjamesfamilyfoundation.org/",
        image: "cristiano.jpg"
    },
    {
        name: "Serena Williams",
        charity: "Serena Williams Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://www.lebronjamesfamilyfoundation.org/",
        image: "serena.jpg"
    },
    {
        name: "Roger Federer",
        charity: "Lebron James Family Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://www.rogerfedererfoundation.org/en/who-we-are/mission/",
        image: "roger.jpg"
    },
    {
        name: "Lindsey Vonn",
        charity: "Lebron James Family Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://www.lebronjamesfamilyfoundation.org/",
        image: "lindsey.jpg"
    },
    {
        name: "Tiger Woods",
        charity: "TGR Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://tgrfoundation.org/",
        image: "tiger.jpg"
    },
    {
        name: "Colin Kaepernick",
        charity: "Colin Kaepernick Foundation",
        description: "Recognizing the life-changing importance of education, The LeBron James Family Foundation invest its time, resources, and attention in the kids of LeBron's hometown of Akron, Ohio.",
        city: "Akron, OH",
        url: "https://kaepernick7.com/",
        image: "colin.jpg"
    }
];





const Cards = () => {

    const addToHub = () => {
        console.log("click");
        // insert dispatch to user's hub here
    };

    return (

        <>
            <Jumbo />

            <Container>
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
                                        <Button onClick={addToHub} variant="info">Add To Hub</Button>{' '}
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

export default Cards;


