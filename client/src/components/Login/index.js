import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";
// import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Jumbotron } from 'react-bootstrap';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' })
    const [login] = useMutation(LOGIN);
  
    const handleFormSubmit = async event => {
      event.preventDefault();
      try {
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e)
      }
    };
  
    const handleLogin = event => {
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
                        <Form onSubmit={handleFormSubmit}>
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
                            <Button onClick={handleLogin} variant="info" type="submit">
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

export default Login