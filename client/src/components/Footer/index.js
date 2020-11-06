import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {

    return (
        <>
            {/* <footer className="footer">
                <Navbar position="bottom" className="mr-auto ml-auto" bg="dark" variant="dark">
                    <Navbar.Brand className="mr-auto ml-auto font-italic">Made with <FavoriteIcon /> by people who care
                    </Navbar.Brand>
                </Navbar>
            </footer> */}

            <footer className="w-100 mt-auto text-light bg-dark p-4 font-italic">
                <h5 className="text-center my-auto">Made with <FavoriteIcon /> by people who care</h5>
            </footer>
        </>
    );
};

export default Footer