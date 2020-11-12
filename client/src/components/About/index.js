import React from 'react';
// import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

const About = () => {

    return (

        <Jumbotron>
            <h1>About the Authors</h1>
            <h3>Taylor Nyquist</h3>
            <p className="mt-3">
            In early high school my summer job was framing houses for my uncle’s construction company. Every year we sponsored several Habitat For Humanity builds in my hometown of Rockford, IL. 
            This began my love for “hands on” charity work. 
            <br></br>
            <br></br>
            Over the years I have been involved with Habitat For Humanity which helps families build and improve places to call home, 
            Kids Around the World which establishes playgrounds in poverty-stricken communities around the world, and Hands On Nashville whose mission is to meet community needs 
            through volunteerism. On a special occasion I was able to volunteer with the USO performing concerts for the troops in Iraq and Kuwait.
            </p>
            <h3>Mike Portu</h3>
            <p>
                Graphql Wizard
            </p>
            <h3>Jacob Daughtry</h3>
            <p>
                I began working with charities in my early 20s. The first time I raised money was for luekemia research after losing a loved one in 2012. 
                Since then, I have partnered with friends to provide toys for tots and volunteer programs whenever there has been an opporunity.
                <br></br>
                <br></br>
                Our goal with this application is to show people the amazing work that is being done by their favorite athletes, musicians and entrepreneurs 
                that's often overshadowed by the headlines they generate and help people share that cause with them.
            </p>
            <p >
                <Button className="mt-3" href="/" variant="info">Take Me Home</Button>
            </p>
        </Jumbotron>

    );
};

export default About;