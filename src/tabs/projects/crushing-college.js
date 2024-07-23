import React from "react";
import { Helmet } from 'react-helmet';
import Navbar from "../../nav/navbar";

const CrushingCollege = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{'CrushingCollege | PG'}</title>
            </Helmet>
            
            <Navbar className='nav'/>
            <div className="App">
                <h1>CrushingCollege</h1>
                <div className="project-demo">
                    <iframe src="../../project-files/CrushingCollege.pdf#view=fit" title="CrushingCollege" className="demo-doc"/>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default CrushingCollege;