import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardDeck } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {

    return (

        // <>
        //     <Jumbotron className="pt-3">
        //         <h1 className="text-info mb-4">About the Authors</h1>
        //         <Container>
        //         <h3>Taylor Nyquist</h3>
        //         <p className="mt-3">
        //             In early high school my summer job was framing houses for my uncle’s construction company. Every year we sponsored several Habitat For Humanity builds in my hometown of Rockford, IL.
        //             This began my love for “hands on” charity work.
        //     <br></br>
        //             <br></br>
        //     Over the years I have been involved with Habitat For Humanity which helps families build and improve places to call home,
        //     Kids Around the World which establishes playgrounds in poverty-stricken communities around the world, and Hands On Nashville whose mission is to meet community needs
        //     through volunteerism. On a special occasion I was able to volunteer with the USO performing concerts for the troops in Iraq and Kuwait.
        //     </p>
        //         <h3>Mike Portu</h3>
        //         <p>
        //             Hospitals and doctors have always been a big part of my life as someone with a congenital heart conditions. I have experienced extended long hospitals stays can impact on an individual and on a family. I have enjoyed working with the Ronald McDonald house, American Heart Association, Alzheimer's Association, and Hope Lodge in order to help provide the support for patient's and their families as they navigate various medical experiences.
        //     </p>
        //         <h3>Jacob Daughtry</h3>
        //         <p>
        //             I began working with charities in my early 20s. The first time I raised money was for luekemia research after losing a loved one in 2012.
        //             Since then, I have partnered with friends to provide toys for tots and volunteer programs whenever there has been an opporunity.
        //         <br></br>
        //             <br></br>
        //         Our goal with this application is to show people the amazing work that is being done by their favorite athletes, musicians and entrepreneurs
        //         that's often overshadowed by the headlines they generate and help people share that cause with them.
        //     </p>
        //         <p >
        //             <Button className="mt-3" href="/" variant="info">Take Me Home</Button>
        //         </p>
        //         </Container>
        //     </Jumbotron>
        // </>

        <>
            <div className="mx-3 my-3">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="/images/jacob.jpg" />
                        <Card.Body>
                            <Card.Title className="text-info">Jacob Daughtry</Card.Title>
                            <Card.Text>
                                I began working with charities in my early 20s. The first time I raised money was for luekemia research after losing a loved one in 2012.
                                Since then, I have partnered with friends to provide toys for tots and volunteer programs whenever there has been an opporunity.
                                <br />
                                <br />
                                Our goal with this application is to show people the amazing work that is being done by their favorite athletes, musicians and entrepreneurs
                                that's often overshadowed by the headlines they generate and help people share that cause with them.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Card.Link className="text-info" href="https://www.linkedin.com/in/jacobdaughtry/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </Card.Link>
                            <Card.Link className="text-info" href="https://github.com/akutozo" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                    <Card className="mx-0">
                        <Card.Img variant="top" src="/images/mike.jpg" />
                        <Card.Body>
                            <Card.Title className="text-info">Mike Portu</Card.Title>
                            <Card.Text>
                                Hospitals and doctors have always been a big part of my life as someone with a congenital heart conditions. I have experienced extended long hospitals stays can impact on an individual and on a family. I have enjoyed working with the Ronald McDonald house, American Heart Association, Alzheimer's Association, and Hope Lodge in order to help provide the support for patient's and their families as they navigate various medical experiences.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Card.Link className="text-info" href="https://www.linkedin.com/in/michael-portu-mba-67ab375b/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </Card.Link>
                            <Card.Link className="text-info" href="https://github.com/mlportu" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="/images/taylor.jpg" />
                        <Card.Body>
                            <Card.Title className="text-info">Taylor Nyquist</Card.Title>
                            <Card.Text>
                                In early high school my summer job was framing houses for my uncle’s construction company. Every year we sponsored several Habitat For Humanity builds in my hometown of Rockford, IL.  This began my love for “hands on” charity work.
                            <br />
                                <br />
                            Over the years I have been involved with Habitat For Humanity which helps families build and improve places to call home, Kids Around the World which establishes playgrounds in poverty-stricken communities around the world, and Hands On Nashville whose mission is to meet community needs through volunteerism. On a special occasion I was able to volunteer with the USO performing concerts for the troops in Iraq and Kuwait.
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center">
                            <Card.Link className="text-info" href="https://www.linkedin.com/in/taylor-nyquist/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon />
                            </Card.Link>
                            <Card.Link className="text-info" href="https://github.com/taylornyquist" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon />
                            </Card.Link>
                        </Card.Footer>
                    </Card>
                </CardDeck>
            </div>



        </>

    );
};

export default About;