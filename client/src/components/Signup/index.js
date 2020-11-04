import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Jumbotron } from 'react-bootstrap';

const Signup = () => {

    const handleSigup = () => {
        console.log("click");
        // insert dispatch to signup user here
    };

    return (
        <>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md={5}>
                            <Form>

                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Form.Group>

                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button onClick={handleSigup} variant="info" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>

            </Jumbotron>

        </>
    );
};

export default Signup