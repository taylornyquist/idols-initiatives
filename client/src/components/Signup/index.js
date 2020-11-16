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

    const [userErrorMessage, setUserErrorMessage] = useState('');

    const [addUser, { error }] = useMutation(ADD_USER);

    const handleSigup = async event => {
        event.preventDefault();
        // console.log("clicked submit");
        // console.log(formState);

        if (!formState.firstName) {
            alert("Please enter your first name!");
            return;
        } else if (!formState.lastName) {
            alert("Please enter your last name!");
            return;
        } else if (!formState.username) {
            alert("Please enter a username!");
            return;
        } else if (!formState.email) {
            alert("Please enter your email address!");
            return;
        } else if (!formState.password) {
            alert("Please enter a password!");
            return;
        };

        // if (error) {
        //     const splitError = error.message.split(":");
        //     const displayError = splitError[1];
        //     console.log(displayError);
        //     alert(displayError)
        // }

        try {
            const mutationResponse = await addUser({
                variables: {
                    firstName: formState.firstName.trim(),
                    lastName: formState.lastName.trim(),
                    username: formState.username.trim(),
                    email: formState.email.trim(),
                    password: formState.password.trim()
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

    const handleValidation = event => {

        if (!event.target.value.length) {
            setUserErrorMessage(`${event.target.placeholder} is required.`);
        } else {
            setUserErrorMessage('');
        };
    }

    return (
        <>
            <Jumbotron>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto" md={5}>
                            <Form onSubmit={handleSigup}>

                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        placeholder="First name"
                                        name="firstName"
                                        onChange={handleChange}
                                        onBlur={handleValidation} />
                                </Form.Group>

                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        placeholder="Last name"
                                        name="lastName"
                                        onChange={handleChange}
                                        onBlur={handleValidation} />
                                </Form.Group>

                                <Form.Group controlId="username">
                                    <Form.Label>Desired Username</Form.Label>
                                    <Form.Control
                                        placeholder="Input Username"
                                        name="username"
                                        onChange={handleChange}
                                        onBlur={handleValidation} />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleValidation} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleValidation} />
                                </Form.Group>
                                {
                                    error ? <div>
                                        <p className="text-danger small" >{error.message}</p>
                                    </div> : null
                                }
                                {
                                    userErrorMessage ? <div>
                                        <p className="text-danger small" >{userErrorMessage}</p>
                                    </div> : null
                                }
                                <Button variant="info" type="submit">
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