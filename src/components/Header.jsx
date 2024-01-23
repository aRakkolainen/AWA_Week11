//Based on demo from MaterialUI documentation: https://mui.com/material-ui/react-app-bar/
// Routing made based on this: https://mui.com/material-ui/guides/routing/#button

import * as React from 'react';
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Header = function() {

    return (<>
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                <Button color="inherit" component={Link} to="/"> Home </Button>
                <Button color="inherit" component={Link} to="/about">About</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>)
} 
export default Header;