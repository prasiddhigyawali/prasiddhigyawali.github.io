import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../../nav/navbar";

const CustomLanguage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'Custom Language | PG'}</title>
            </Helmet>
            
            <Navbar className='nav'/>
            <div className="App">
                <h1>Custom Language</h1>
                <div className="project-demo">
                    <iframe title="CustomLanguage" src="../../project-files/CustomLanguage.pdf#view=fit" 
                    download="CustomLanguage.pdf" className="demo-doc"/>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default CustomLanguage;