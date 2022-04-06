import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import about_me from 'gatsby-images/about-me.jpg';
import '../styles/about-me.scss';
//import border_top from "../../assets/border-top-photography.svg";

const AboutMe = () => {
    return (
        <Grid className="about-me" id="about-me" container>
            <Grid xs={12} md={6} item className="about-me__data-container">
                <Typography variant="h2" className="about-me__title">Rodrigo Ezequiel Muñoz</Typography>
                <Typography variant="subtitle1" className="about-me__description">Creador audiovisual</Typography>
                <Button variant="outlined" className="about-me__contact-me">¡ Contactame !</Button>

            </Grid>
            <Grid xs={12} md={6} item className="about-me__img-container">
                <img src={about_me} alt="About me IMG" className="about-me__img" />
            </Grid>
        </Grid>
    )
}

export default AboutMe;

