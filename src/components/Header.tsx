import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import logo from '../../assets/logo.png';
import '../styles/header.scss';

const Header = () => {
    return (
        <Container className="header" maxWidth={false}>
            <img src={logo} className="header__logo" />
            <Typography variant="subtitle1" className="header__subtitle">
                Fotografía, Film-making &amp; Design
            </Typography>
            <Box className="header__arrow--down">
                ∨
            </Box>
        </Container>
    )
}

export default Header;

