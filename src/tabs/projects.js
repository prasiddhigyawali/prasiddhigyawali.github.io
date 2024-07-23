import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../nav/navbar";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'Projects | PG'}</title>
            </Helmet>
            
            <Navbar className='nav'/>
            <div className="App">
                <h1>Projects</h1>
                <Link to="/projects/custom-language" className="project">
                    <div className="project-info">
                        <h3>Custom Language Creation (November 2023)</h3>
                        <ul>
                            <li><strong>Technologies: </strong> Python, RegEx</li>
                            <li>
                                Developed an innovative grammar syntax for a new custom programming language. 
                                Designed and implemented a Python-based translator, enabling seamless execution 
                                of scripts written in this custom language.
                            </li>
                        </ul>
                    </div>
                    <img src='../project-images/custom-language.png' class="project-img" alt="custom language"/>
                </Link>
                <Link to="/projects/budgetit" className="project">
                    <div className="project-info">
                        <h3>BudgetIt (April 2023)</h3>
                        <ul>
                            <li>
                                <strong>Technologies: </strong> Node.js, Express.js, MongoDB, HTML/CSS, JavaScript, JSON
                            </li>
                            <li>
                                Engineered BudgetIt, a personal finance management platform that categorizes expenditures, 
                                provides financial insights through statistical analysis, and recommends optimal budget 
                                allocations to promote informed financial decisions.       
                            </li>
                        </ul>
                    </div>
                    <img src='../project-images/budgetit.png' class="project-img" alt="budgetit"/>
                </Link>
                <Link to="/projects/trait-data-cleaning" className="project">
                    <div className="project-info">
                        <h3>RShiny Trait Data Cleaning App (December 2021 - August 2022)</h3>
                        <ul>
                            <li>
                                <strong>Technologies: </strong> Pandas, NumPy, Python, R, RShiny
                            </li>
                            <li>
                                Designed, launched, and tested an RShiny application that integrated Python functionalities to 
                                streamline vertebrate trait data cleaning and standardization for research purposes.
                            </li>
                        </ul>
                    </div>
                    <img src='../project-images/trait-data.png' class="project-img" alt="trait data cleaning"/>
                </Link>
                <Link to="/projects/crushing-college" className="project">
                    <div className="project-info">
                        <h3>Crushing College (July 2021)</h3>
                        <ul>
                            <li><strong>Technologies: </strong> Figma, Swift, XCode</li>
                            <li>
                                Developed an iOS-based mobile application to guide students through the college application 
                                process. The app includes a personalized questionn aire to identify areas of need and 
                                highlights essential resources, empowering students throughout their journey.
                            </li>
                        </ul>
                    </div>
                    <img src='../project-images/crushing-college.png' class="project-img" alt="crushing college"/>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Projects;