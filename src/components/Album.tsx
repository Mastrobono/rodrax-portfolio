import React, { useState, useEffect } from 'react';
import { Grid, Typography, Slide, Button, Box, Modal } from '@material-ui/core';
import '../styles/album.scss';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Gallery from "./Gallery";
import { INodeData, IImagesQuery, IContent, IEdgeImages} from "./Albums";

const RenderAlbumsContent = ({ content, images } : {content: IContent[], images: IImagesQuery}) => (
    content.map((imageData) => {
        const imageIndex = images.edges.findIndex(image => image.node.name === imageData.path);
        const imageSrc = getImage(images.edges[imageIndex].node)
        return (

            <Grid item xs={6} className="photo-container">
                <GatsbyImage className="photo-container__img" image={imageSrc} alt="img" />
                <Box className="photo-container__text-container">
                    <Typography className="photo-container__text">{imageData.name}</Typography>
                </Box>
            </Grid>
        )
    })
)


const RenderSlide = ({ isFirstPosition, state, imageData, images } : {isFirstPosition: boolean, state: boolean, imageData: INodeData, images: IImagesQuery}) => {
    const { content } = imageData;
    const slicedContent = isFirstPosition ? content.slice(0, 4) : content.slice(4, 8);
    const props = {
        in: state ? true : false,
        direction: isFirstPosition ? "right" : "left",
        unmountOnExit: isFirstPosition ? false : true,
        style: state ? { 'timeout': 500 } : {}
    }
    return (
        <Slide {...props} >
            <Grid className={`album__slider album__slider--${isFirstPosition ? 0 : 1}`} container xs={12}>
                <RenderAlbumsContent content={slicedContent} images={images} />
            </Grid>
        </Slide>
    )
}

const RenderAlbums = ({ imageData, images, state }: {imageData: INodeData, images: IImagesQuery, state: boolean}) => {
    return (
        <>
            {<>
                <RenderSlide isFirstPosition={true} state={state} imageData={imageData} images={images} />;
                <RenderSlide isFirstPosition={false} state={!state} imageData={imageData} images={images} />;
            </>
            }
        </>

    )

}

interface Props {
    data: INodeData;
    images: IImagesQuery;
}

const Album = ({ data, images }: Props) => {

    const [checked, setChecked] = useState(true);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = () => {
        setChecked((prev: boolean) => !prev);
    };

    return (
        <Grid className={`album bg--${data.bgColor}`} container >
            <Grid item xs={12} direction="column" className="album__texts-container">
                <Typography className="title-2" align="center">{data.title}</Typography>
                <Typography className="subtitle-2" align="center">{data.subtitle}</Typography>
            </Grid>
            <Grid item xs={12} style={{ position: "relative" }}>
                <RenderAlbums imageData={data} images={images} state={checked} />
            </Grid>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="modal"
            >
                <Gallery />
            </Modal>
        </Grid >
    )
}

export default Album;
