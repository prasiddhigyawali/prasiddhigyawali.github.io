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
                    <object data="../../project-files/CrushingCollege.pdf#view=fit" type="application/pdf" className="demo-doc">
                        <p>Your web browser doesn't have a PDF plugin.
                        Instead you can <a href="../../project-files/CrushingCollege.pdf">click here to
                        download the PDF file.</a></p>
                    </object>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default CrushingCollege;