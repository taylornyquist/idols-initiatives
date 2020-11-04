import React from 'react';
// import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

const NoMatch = () => {

    return (

        <Jumbotron>
            <h1>404 Page Not Found</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid, possimus, voluptatem, itaque quisquam dolorem reiciendis accusamus laboriosam ullam fugiat blanditiis. Quaerat sunt et laudantium eum alias, deleniti cupiditate unde!
            </p>
            <p>
                <Button href="/" variant="info">Take Me Home</Button>
            </p>
        </Jumbotron>

    );
};

export default NoMatch;