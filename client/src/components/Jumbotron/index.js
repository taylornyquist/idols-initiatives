import React from 'react';
// import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

const Jumbo = () => {

    return (

        <Jumbotron className="py-6">
            <h1>Idols Initiatives</h1>
            <p>
                Our goal with Idols Initiatives is to create a central place to share and promote causes important to your favorite athletes, musicians and more.
            </p>
            <p>
                <Button href="/about" variant="info" className="mt-2">Learn More</Button>
            </p>
        </Jumbotron>

    );
};

export default Jumbo;