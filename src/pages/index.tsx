//@ts-check
import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Album from '../components/Album';
import albums from '../../assets/albums.json';
import '../styles/index.scss';

const Albums = () => <>{albums.map((album: IGroup) => <Album album={album} />)}</>;

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
