import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Auth from "../../utils/auth";
import MemeModal from '../MemeModal'

const Navigation = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Idols Initiatives</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        {Auth.loggedIn() ? (
                            <>
                                <Nav.Link href="/hub">My Hub</Nav.Link>
                                <Nav.Link href="/add-idol">Add Idol</Nav.Link>
                                <Nav.Link href="/" onClick={logout}>Logout</Nav.Link>
                            </>
                        ) : (
                                <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">Signup</Nav.Link>
                                </>
                            )}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets">More Deets</Nav.Link> */}
                        {/* <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link> */}
                        <MemeModal />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    );
};

export default Navigation