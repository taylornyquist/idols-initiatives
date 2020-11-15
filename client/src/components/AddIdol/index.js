import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Form, Button, Jumbotron } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_NEW_IDOL } from '../../utils/mutations';

const AddIdol = () => {

    const [formState, setFormState] = useState({
        name: '',
        chairt: '',
        description: '',
        hometown: '',
        charity_url: '',
        twitter_url: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("click");
        console.log(formState)
        // insert dispatch to signup user here
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
                    <Form className="mx-3">
                        <Form.Row>
                            <Form.Group className="px-4" as={Col} md={6}>

                                <Form.Group controlId="idolName">
                                    <Form.Label>Idol's Full Name</Form.Label>
                                    <Form.Control 
                                        placeholder="Idol name"
                                        name="name"
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="foundationName">
                                    <Form.Label>Foundation's Name</Form.Label>
                                    <Form.Control 
                                        placeholder="Foundation Name"
                                        name = "charity"
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="foundationDescription">
                                    <Form.Label>Description of Foundation</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={8} 
                                        placeholder="Write description here..."
                                        name = "description"
                                        onChange={handleChange} />
                                    <Form.Text className="text-muted">
                                        280 characters or less
                                    </Form.Text>
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="px-4" as={Col} md={6}>

                                <Form.Group controlId="idolHometown">
                                    <Form.Label>Idol's Hometown</Form.Label>
                                    <Form.Control 
                                        placeholder="Smallville, KS "
                                        name="hometown"
                                        onChange={handleChange} />
                                </Form.Group>

                                <Form.Group controlId="foundationUrl">
                                    <Form.Label>Foundation Url</Form.Label>
                                    <Form.Control 
                                        type="url" 
                                        placeholder="https://www.myfoundation.com"
                                        name = "charity_url"
                                        onChange={handleChange} />
                                    <Form.Text className="text-muted">
                                        Please include the correct prefix.  Ex: "https://www."
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="idolTwitter">
                                    <Form.Label>Idol's Twitter Url</Form.Label>
                                    <Form.Control 
                                        type="url" 
                                        placeholder="https://twitter.com/MyTwitter" 
                                        name="twitter_url"
                                        onChange={handleChange}/>
                                    <Form.Text className="text-muted">
                                        Please include the correct prefix.  Ex: "https://"
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="idolImage" label="Upload Image Here" accept="image/jpeg, image/jpg" />
                                    <Form.Text className="text-muted">
                                        Please submit a jpg/jpeg image file in 16:9 format.
                                    </Form.Text>
                                </Form.Group>

                                <Button className="float-right" onClick={handleSubmit} variant="info" type="submit">
                                    Submit
                                </Button>

                            </Form.Group>
                        </Form.Row>
                    </Form>
            </Jumbotron>

        </>
    );
};

export default AddIdol