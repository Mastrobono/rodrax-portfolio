import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import "../styles/album.scss";
import { GatsbyImage } from "gatsby-plugin-image";
import Gallery from "./Gallery";
import { IContent } from "./Albums";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { ModalContext } from "../context/context";

interface Props {
  imageData: IContent;
  imageSrc: IGatsbyImageData;
}

const AlbumContent = ({ imageData, imageSrc }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid item xs={6} className="photo-container">
      <GatsbyImage
        className="photo-container__img"
        image={imageSrc}
        alt="img"
      />
      <Box className="photo-container__text-container">
        <Typography className="photo-container__text">
          {imageData.name}
        </Typography>
      </Box>
      <ModalContext.Provider value={{open, setOpen}}>
        <Gallery images={{}} title={"test"} />
      </ModalContext.Provider>

      <Button onClick={() => setOpen(true)} style={{position:'absolute'}}> open </Button>
    </Grid>
  );
};

export default AlbumContent;
