//@ts-check
import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Albums from '../components/Albums';
import '../styles/index.scss';

const IndexPage = () => {
  return (
    <Container className="main" maxWidth={false}>
      <Header />
      <AboutMe />
      <Albums />
    </Container>
  )
}


export default IndexPage
