import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../../nav/navbar.js";

const BudgetIt = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'BudgetIt | PG'}</title>
            </Helmet>
            
            <Navbar className='nav'/>
            <div className="App">
                <h1>BudgetIt</h1>
                <div className="project-demo">
                    <iframe 
                        src="https://www.youtube.com/embed/S_eTfvsHtFw?si=dZlWiaJviTN--MwZ" 
                        title="BudgetIt" 
                        frameborder="0" 
                        allow="clipboard-write; encrypted-media; gyroscope; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                        className="demo-doc">
                    </iframe>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default BudgetIt;