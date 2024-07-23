import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../nav/navbar";

const Experience = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'Experience | PG'}</title>
            </Helmet>

            <Navbar className='nav'/>
            <div className="App">
            <h1>Experience</h1>
                <div className="experience">
                    <h3>CleanCoderAI (Startup)</h3>
                    <h4>Application Developer/Tester</h4>
                    <p className="experience-description">
                    <strong>Technologies:</strong> FASTApi, AWS, DynamoDB, Python, GitHub <br/>
                    <ul>
                        <li>
                            Designed and implemented multiple endpoints using FastAPI 
                            to create efficient and scalable web services for the CleanCoderAI application.
                        </li>
                        <li>
                            Connected endpoints to the AWS DynamoDB database and utilized NoSQL, ensuring 
                            seamless data storage and retrieval.
                        </li>
                        <li>
                            Performed and wrote unit and integration testing 
                            utilizing PyTest to ensure the reliability and stability of endpoints written for 
                            the application.
                        </li>
                    </ul>
                    
                    </p>
                </div>
                <div className="experience">
                    <h3><a href='https://www.arizona.edu/' target='_blank' rel='noreferrer noopener'>University of Arizona</a></h3>
                    <h4>Software Developer</h4>
                    <p className="experience-description">
                    <strong>Technologies:</strong> Salesforce Lightning Web Components, DemandTools, Jira, JavaScript, HTML, 
                                                    CSS, Apex, GitLab, Gearset <br/>
                    <ul>
                        <li>
                            Led the development of <a href='https://catcloud.arizona.edu/' target='_blank' rel='noreferrer noopener'>CatCloud</a>, 
                            a digital planner hub utilized by over 40,000 students, using JavaScript, Apex, CSS, 
                            and HTML. Enhanced student life by centralizing essential tools, incorporating 
                            Quicklinks, Content Apps/Links, and an assignment tracking system.
                        </li>
                        <li>
                            Spearheaded the creation and testing of a scheduling synchronization feature 
                            for faculty users, streamlining calendar management across Salesforce and Outlook 
                            allowing for significant reduction of scheduling conflicts amongst faculty users.
                        </li>
                        <li>
                            Worked closely with a multidisciplinary team, utilizing Agile project management and 
                            test driven development to ensure timely and efficient project delivery.
                        </li>
                    </ul>
                    </p>
                </div>
                <div className="experience">
                    <h3><a href='https://www.radian.com/' target='_blank' rel='noreferrer noopener'>Radian Group</a></h3>
                    <h4>Software Engineering Intern</h4>
                    <p className="experience-description">
                    <strong>Technologies:</strong> Snyk, BitBucket, Jira, Bamboo, GitLab, Java <br/>
                    <ul>
                        <li>
                            Boosted code coverage for the <a href='https://www.homegenius.com/' target='_blank' rel='noreferrer noopener'>Homegenius</a> platform by 20% through implementing 
                            comprehensive JUnit testing, ensuring robust performance and reliability.
                        </li>
                        <li>
                            Developed and integrated Java-based security measures, 
                            fortifying the Homegenius platform and safeguarding user data.
                        </li>
                        <li>
                            Identified and resolved 70+ high-priority security vulnerabilities using Snyk, 
                            ensuring compliance with industry standards and enhancing
                            platform security.
                        </li>
                    </ul>
                    </p>
                </div>
                <div className="experience">
                    <h3><a href='https://futres.org/' target='_blank' rel='noreferrer noopener'>FuTRES</a></h3>
                    <h4>Project Intern</h4>
                    <p className="experience-description">
                    <strong>Technologies:</strong> GitHub, R, Python, RStudio, RShiny, Streamlit, Curl <br/>
                    <ul>
                        <li>
                            Designed and launched an <a href='https://futres.shinyapps.io/pyConvApp/' target='_blank' rel='noreferrer noopener'>RShiny application</a> that 
                            integrated Python functionalities to streamline vertebrate trait data cleaning and standardization,
                            recognized in the <a href='https://doi.org/10.1016/j.isci.2022.105101' target='_blank' rel='noreferrer noopener'>iScience Journal</a>.
                        </li>
                        <li>
                            Architected a properties file to manage variables for the FuTRES API, which serves 
                            the workflow for assembling functional trait data measured at the specimen level. 
                            This significantly improved security and resource management.
                        </li>
                        <li>
                            Implemented a dynamic access token retrieval system using curl commands and Python, 
                            enhancing real-time data responsiveness and system efficiency.
                        </li>
                    </ul>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;