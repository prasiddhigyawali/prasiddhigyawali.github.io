import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../../nav/navbar";

const TraitDataCleaning = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'Data Cleaning | PG'}</title>
            </Helmet>
            
            <Navbar className='nav'/>
            <div className="App">
                <h1>Trait Data Cleaning</h1>
                <div className="project-demo">
                <iframe 
                    src="https://www.youtube.com/embed/XhnCefQw0wI?si=nv764bEaWLqFWplj" 
                    title="Trait Data Cleaning" 
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

export default TraitDataCleaning;