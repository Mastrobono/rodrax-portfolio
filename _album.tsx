import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import TextCard from './TextCard';
import '../styles/album.scss';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';


interface Props {
    album: IGroup;
}


const AlbumPhotography = ({ album }: Props) => (
    <StaticQuery
        query={graphql`
        query AllImagesAndJSON {
            images: allFile(filter: {sourceInstanceName: {eq: "content"}}) {
              edges {
                node {
                  name
                  childImageSharp {
                    fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            datafromjson: allAlbumsJson {
              edges {
                node {
                  title,
                  subtitle
                  content {
                    name
                    type
                    path
                  }
                }
              }
            }
          }
          `
        }
        render={data => {
            const { images, datafromjson } = data
            debugger;
            <div>
                {console.log(album)}
                {data.allAlbumsJson.edges.map(item => {
                    return (
                        <Container className="album-section" maxWidth={false}>
                            <Grid container xs={12}>
                                <Typography variant="h1" className="card__title">
                                    {album.title}
                                </Typography>
                                <img src={album.content[0].path} />
                            </Grid>
                            <Grid container xs={12}>
                                <Typography variant="subtitle1" className="card__subtitle">
                                    {album.subtitle}
                                </Typography>
                            </Grid>
                            <Grid className="album album--photography">
                            </Grid>
                        </Container >
                    )
                })}
            </div>

        }}
    />
)

export default AlbumPhotography;
