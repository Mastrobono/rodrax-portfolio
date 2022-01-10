import React from 'react';
import { Container, Typography } from '@material-ui/core';
import '../styles/text-card.scss';

const TextCard = () => {
    return (
        <Container className="card" maxWidth={false}>
            <Typography variant="h1" className="card__title">
                ¿Qué es la fotografía?
            </Typography>
            <Typography variant="subtitle1" className="card__subtitle">
                Es una de las maneras de transmitir un pensamiento arístico a partir de una cámara de fotos
            </Typography>
        </Container >
    )
}

export default TextCard;

