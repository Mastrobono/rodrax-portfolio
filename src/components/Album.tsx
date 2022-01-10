import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import TextCard from './TextCard';
import '../styles/album.scss';
import { useStaticQuery, graphql } from 'gatsby';
interface Props {
    album: IGroup;
}



const AlbumPhotography = ({ album }: Props) => {

    const data = useStaticQuery(graphql`
    query project{
      AllAlbums {
        edges {
          node{
              title,
              subtitle,
              content
          }
        }
      }
    }
  `
    );


    console.log(data)
    debugger;
    const Content = () => <>{
        album.content.map((item) => {
            if (item.type == 'img') {
                return <img src="" />;
            } else {
                return <h1>test</h1>;
            }
        })
    }</>;

    return (
        <Container className="album-section" maxWidth={false}>
            <Grid container xs={12}>
                <Typography variant="h1" className="card__title">
                    {album.title}
                </Typography>
            </Grid>
            <Grid container xs={12}>
                <Typography variant="subtitle1" className="card__subtitle">
                    {album.subtitle}
                </Typography>
            </Grid>
            <Grid className="album album--photography">
                <Content />
            </Grid>
        </Container >
    )
}

export default AlbumPhotography;
