import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Col, Form, Button, Jumbotron } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_NEW_IDOL } from '../../utils/mutations';

const AddIdol = () => {

    const [formState, setFormState] = useState({
        name: '',
        charity: '',
        description: '',
        hometown: '',
        charity_url: '',
        twitter_url: '',
        image: '',
        idol_category: ''
    });

    const [addNewIdol, { error }] = useMutation(SAVE_NEW_IDOL);

    const handleSubmit = async event => {
        event.preventDefault();
        console.log("click");
        console.log(formState)
        // insert dispatch to signup user here

        try{
            const mutationResponse = await addNewIdol({
                variables: {
                    name: formState.name.trim(),
                    charity: formState.charity.trim(),
                    description: formState.description.trim(),
                    hometown: formState.hometown.trim(),
                    charity_url: formState.charity_url.trim(),
                    twitter_url: formState.twitter_url.trim(),
                    image: formState.image,
                    idol_category: formState.idol_category
                }
            });
            console.log(mutationResponse);
        } catch(e){
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
                                    <Form.File id="idolImage" 
                                        label="Upload Image Here" 
                                        accept="image/jpeg, image/jpg" 
                                        name="image"
                                        onChange = {handleChange}/>
                                    <Form.Text className="text-muted">
                                        Please submit a jpg/jpeg image file in 16:9 format.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Select Category</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        name="idol_category"
                                        onChange={handleChange}>
                                        <option>Athlete</option>
                                        <option>Musician</option>
                                        <option>Entrepreneur</option>
                                    </Form.Control>
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