import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../nav/navbar";
import { ReactTyped } from "react-typed";

const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'Prasiddhi Gyawali'}</title>
            </Helmet>
            <Navbar className='nav'/>
            <div className="App">
                <h1><ReactTyped strings={["Hello! I'm Prasiddhi Gyawali!"]} typeSpeed={100} backSpeed={100} loop /></h1>
                <div className="about">
                    <div className="personal-photo">
                        <img src = "./personal-photo.png" alt = "Prasiddhi Gyawali"/>
                    </div>
                    <div className="personal-info">
                    All my life, I have been fascinated by the world of technology. 
                    This fascination ignited a spark within me during my high school years, leading
                    me to delve into programming and computer science. It was during 
                    this time that I discovered my true passion, and I fell in love with the endless 
                    possibilities that coding and software development presented.
                    <br/>
                    <br/>
                    Since then, my journey with computer science has heavily focused on learning and growth. 
                    I earned my B.S. in Computer Science from the University of Arizona, an achievement that has 
                    equipped me with a solid foundation in this dynamic field. Along the way, I have gained 
                    invaluable hands-on experience in the intricate processes of software development through
                    my courses and professional teams that I have had the opportunity to work with.
                    <br/>
                    <br/>
                    As I look to the future, my ambition is clear: I wish to continue building innovative software 
                    projects that meaningful impact on the world and make a positive difference in people's lives.
                    </div>
                </div>
                <div className="personal-links">
                <a href="https://www.linkedin.com/in/prasiddhi-gyawali/" target='_blank' rel='noreferrer noopener' class="personal-urls">
                    <img src='../linkedin.png' class="personal-urls-img" alt="Linkedin logo"/>
                    LinkedIn
                </a>
                <a href="https://github.com/prasiddhigyawali" target='_blank' rel='noreferrer noopener' class="personal-urls">
                    <img src='../github.png' class="personal-urls-img" alt="Linkedin logo"/>
                    GitHub
                </a>
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;