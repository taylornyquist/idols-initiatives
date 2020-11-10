import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";
import { Container, Row, Col, Form, Button, Jumbotron } from 'react-bootstrap';

const Signup = () => {

    const [formState, setFormState] = useState({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '' 
    });
    const [addUser] = useMutation(ADD_USER);

    const handleSigup = async event => {
        event.preventDefault();
        console.log("clicked submit");
        console.log(formState);

        try {
            const mutationResponse = await addUser({
                variables: {
                    firstName: formState.firstName, 
                    lastName: formState.lastName, 
                    username: formState.username, 
                    email: formState.email, 
                    password: formState.password
                }
            });
            console.log(mutationResponse);
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
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
                                    <Form.Control 
                                        placeholder="First name" 
                                        name="firstName" 
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                        placeholder="Last name" 
                                        name="lastName" 
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="username">
                                    <Form.Label>Desired Username</Form.Label>
                                    <Form.Control 
                                        placeholder="Input Username" 
                                        name="username" 
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}  />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
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