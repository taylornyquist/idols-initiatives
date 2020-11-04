import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {

    return (
        <>
            <footer>
                <Navbar position="bottom" className="mr-auto ml-auto" bg="dark" variant="dark">
                    <Navbar.Brand className="mr-auto ml-auto font-italic">Made with <FavoriteIcon /> by people who care
                    </Navbar.Brand>
                </Navbar>
            </footer>
        </>
    );
};

export default Footer