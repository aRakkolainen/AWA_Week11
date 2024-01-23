//Based on demo from MaterialUI documentation: https://mui.com/material-ui/react-app-bar/
// Routing made based on this: https://mui.com/material-ui/guides/routing/#button

import * as React from 'react';
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useTranslation} from 'react-i18next';
import { Typography } from '@mui/material';

const Header = function() {
    const {t, i18n} = useTranslation();
    const handleLanguageChange = (language) => {
        console.log("Changing language..")
            i18n.changeLanguage(language)
    }
    return (<>
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                <Button color="inherit" component={Link} to="/"> {t("Home")} </Button>
                <Button color="inherit" component={Link} to="/about">{t("About")}</Button>
                <Typography component="div"> </Typography>
                <Button id="fi" color="inherit" onClick={() => handleLanguageChange("fi")}>fi</Button>
                <Button id="en" color="inherit" onClick={() => handleLanguageChange("en")}>en</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>)
} 
export default Header;