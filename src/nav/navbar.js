import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './navbar.css'
 
function Navbar() {
    const [auth] = React.useState(true);
 
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='nav'>
                    <Link to="/" class="site-logo">
                      <img src='../../logo.png' class="site-logo-img" alt="Prasiddi Gyawali logo"/>
                      <Typography variant="h6" component="div">
                        Prasiddhi Gyawali
                      </Typography>
                    </Link>
                    {auth && (
                        <div className='nav-items' style={{ display: 'flex', gap: '10px' }}>
                            <Link class="nav-item" to="/experience"><Typography class="nav-item">Experience</Typography></Link>
                            <Link class="nav-item" to="/projects"><Typography class="nav-item">Projects</Typography></Link>
                            <Link class="nav-item" to="/contact"><Typography class="nav-item">Contact</Typography></Link>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;