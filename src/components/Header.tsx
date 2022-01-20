import React from 'react';
import { Container, Box, Typography, Link } from '@material-ui/core';
import logo from '../../assets/logo.png';
import '../styles/header.scss';

const marginTop = 16;

const scrollDown = () => {
    window.scrollTo({
        top: document.getElementById("about-me").offsetTop - marginTop,
        behavior: 'smooth'
    });
}

const Header = () => {
    return (
        <Container className="header" maxWidth={false}>
            <img src={logo} className="header__logo" />
            <Typography variant="subtitle1" className="header__subtitle">
                Fotografía, Film-making &amp; Design
            </Typography>
            <Box className="header__arrow-container" onClick={scrollDown}>
                <Box className="header__arrow header__arrow--first"></Box>
                <Box className="header__arrow header__arrow--second"></Box>
            </Box>


        </Container>
    )
}

export default Header;

