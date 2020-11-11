import Reac, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Form, Button, Jumbotron } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_IDOL } from '../../utils/mutations';

const AddIdol = () => {

    const [formState, setFormState] = useState({

    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("click");
        // insert dispatch to signup user here
    };

    return (
        <>
            <Jumbotron>
                    <Form className="mx-3">
                        <Form.Row>
                            <Form.Group className="px-4" as={Col} md={6}>

                                <Form.Group controlId="idolName">
                                    <Form.Label>Idol's Full Name</Form.Label>
                                    <Form.Control placeholder="Idol name" />
                                </Form.Group>

                                <Form.Group controlId="foundationName">
                                    <Form.Label>Foundation's Name</Form.Label>
                                    <Form.Control placeholder="Foundation Name" />
                                </Form.Group>

                                <Form.Group controlId="foundationDescription">
                                    <Form.Label>Description of Foundation</Form.Label>
                                    <Form.Control as="textarea" rows={8} placeholder="Write description here..." />
                                    <Form.Text className="text-muted">
                                        280 characters or less
                                    </Form.Text>
                                </Form.Group>

                            </Form.Group>

                            <Form.Group className="px-4" as={Col} md={6}>

                                <Form.Group controlId="idolHometown">
                                    <Form.Label>Idol's Hometown</Form.Label>
                                    <Form.Control placeholder="Smallville, KS " />
                                </Form.Group>

                                <Form.Group controlId="foundationUrl">
                                    <Form.Label>Foundation Url</Form.Label>
                                    <Form.Control type="url" placeholder="https://www.myfoundation.com" />
                                    <Form.Text className="text-muted">
                                        Please include the correct prefix.  Ex: "https://www."
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="idolTwitter">
                                    <Form.Label>Idol's Twitter Url</Form.Label>
                                    <Form.Control type="url" placeholder="https://twitter.com/MyTwitter" />
                                    <Form.Text className="text-muted">
                                        Please include the correct prefix.  Ex: "https://"
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.File id="idolImage" label="Upload Image Here" accept="image/jpeg, image/jpg" />
                                    <Form.Text className="text-muted">
                                        Please submit a jpg/jpeg image file in 4:3 format.
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