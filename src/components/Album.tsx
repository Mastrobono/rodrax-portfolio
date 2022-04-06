import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Slide,
  Button,
} from "@material-ui/core";
import "../styles/album.scss";
import { getImage } from "gatsby-plugin-image";
import { INodeData, IImagesQuery, IContent, IEdgeImages } from "./Albums";
import AlbumContent from "./AlbumContent";
import dividers from "./Dividers";

const RenderAlbum = ({
  content,
  images,
}: {
  content: IContent[];
  images: IImagesQuery;
}) =>
  content.map((imageData) => {
    const imageIndex = images.edges.findIndex(
      (image) => image.node.name === imageData.id
    );
    const imageSrc = getImage(images.edges[imageIndex].node);
    return <AlbumContent imageData={imageData} imageSrc={imageSrc} />;
  });

const RenderSlide = ({
  isFirstPosition,
  state,
  albumData,
  images,
}: {
  isFirstPosition: boolean;
  state: boolean;
  albumData: INodeData;
  images: IImagesQuery;
}) => {
  const { content } = albumData;
  const slicedContent = isFirstPosition
    ? content.slice(0, 4)
    : content.slice(4, 8);
  const props = {
    in: state ? true : false,
    direction: isFirstPosition ? "right" : "left",
    unmountOnExit: isFirstPosition ? false : true,
    style: state ? { timeout: 500 } : {},
  };
  return (
    <Slide {...props}>
      <Grid
        className={`album__slider album__slider--${isFirstPosition ? 0 : 1}`}
        container
        xs={12}
      >
        <RenderAlbum content={slicedContent} images={images} />
      </Grid>
    </Slide>
  );
};

const RenderAlbums = ({
  albumData,
  images,
  state,
}: {
  albumData: INodeData;
  images: IImagesQuery;
  state: boolean;
}) => {
  return (
    <>
      {
        <>
          <RenderSlide
            isFirstPosition={true}
            state={state}
            albumData={albumData}
            images={images}
          />
          <RenderSlide
            isFirstPosition={false}
            state={!state}
            albumData={albumData}
            images={images}
          />
        </>
      }
    </>
  );
};

interface Props {
  data: INodeData;
  images: IImagesQuery;
}

const Album = ({ data, images }: Props) => {
  const [sliderPosition, setSliderPosition] = useState(true);

  const handleChange = () => {
    setSliderPosition((prev: boolean) => !prev);
  };

  const [intervalId, setIntervalId] = useState();

  const slideInterval = () => {
    const id: any = setInterval(handleChange, 4500);
    setIntervalId(id);
  };

  useEffect(() => {
    //slideInterval(); // Activar cuando lance prod
  }, []);

  const restartInterval = () => {
    clearInterval(intervalId);
    handleChange();
    slideInterval();
  };



  console.log(dividers[data.sectionId][0])
  return (
    <>
      {dividers[data.sectionId][0]()}
      <Grid
        item
        xs={12}
        direction="column"
        className="album__texts-container bg--white"
      >
        <Typography className="title-2" align="center">
          {data.title}
        </Typography>
        <Typography className="subtitle-2" align="center">
          {data.subtitle}
        </Typography>
      </Grid>
      {dividers[data.sectionId][1]()}
      <Grid className={`album bg--${data.bgColor}`} container>
        <Button onClick={restartInterval} style={{position:'absolute'}}>test</Button>
        <Grid item xs={12} style={{ position: "relative" }}>
          <RenderAlbums
            albumData={data}
            images={images}
            state={sliderPosition}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Album;
