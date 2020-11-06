import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

const charityMemes = [
    {
        id: 0,
        name: "Willy Wonka",
        image: "/memes/willy-wonka.jpg" 
    },
    {
        id: 1,
        name: "Baby",
        image: "/memes/baby.jpg" 
    },
    {
        id: 2,
        name: "Dr. Evil",
        image: "/memes/dr-evil.jpg" 
    },
    {
        id: 3,
        name: "Joe Dirt",
        image: "/memes/joe-dirt.jpg" 
    },
    {
        id: 4,
        name: "Office Space",
        image: "/memes/office-space.jpg" 
    },
    {
        id: 5,
        name: "Give A Penny",
        image: "/memes/penny.jpg" 
    }
];

const MemeModal = () => {

    const [show, setShow] = useState(false);
    const [memeId, setMemeId] = useState(0);

    const handleClose = () => {
        setShow(false);
        setTimeout(() => {
            increment();
        }, 100);
        
    };

    const handleNextMeme = () => {
        setShow(true);
        increment();
    };

    const handleShow = () => setShow(true);

    const increment = () => {
        setMemeId(prevMemeId => {
            if (prevMemeId === charityMemes.length - 1) {
                console.log(0);
                return 0;
            } else {
                console.log(prevMemeId + 1);
                return prevMemeId + 1;
            }
        })
    }

    // const randomNumber = (min, max) => {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     const randomMemeId = Math.floor(Math.random() * (max - min + 1)) + min;
    //     console.log(randomMemeId);
    //     return randomMemeId; 
    // };

    return (
        <>
            <Nav.Link variant="primary" onClick={handleShow}>
                Dank Memes
            </Nav.Link>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Random Charity Meme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <Image src={charityMemes[memeId].image} alt={charityMemes[memeId].name} rounded fluid />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleNextMeme}>
                        Next Meme
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MemeModal;