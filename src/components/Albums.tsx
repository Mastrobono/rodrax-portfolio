import React from 'react';
import '../styles/album.scss';
import { StaticQuery, graphql, } from 'gatsby';
import Album from "./Album";

interface IAllImagesAndJSON {
    dataFromJson: IDataQuery;
    images: IImagesQuery;
}

interface IDataQuery {
    edges: IEdgeData[];
}

export interface IImagesQuery {
    edges: IEdgeImages[];
}


interface IEdgeData {
    node: INodeData;
}


export interface INodeData {
    bgColor: string;
    content: IContent[];
    subtitle: string;
    title: string;
    sectionId: "photography" | "video" | "design";
}

export interface IContent {
    name: string;
    id: "string";
}

export interface IEdgeImages {
    node: INodeImages;
}

interface INodeImages {
    childImageSharp: any;
    name: string;
}


const Albums = () => {

    return (
        <StaticQuery
            query={graphql`
                query AllImagesAndJSON {
                    images: allFile(filter: {sourceInstanceName: {eq: "content"}}) {
                        edges {
                            node {
                            name
                            childImageSharp {
                                gatsbyImageData(
                                    placeholder: BLURRED
                                    formats: [AUTO, WEBP, AVIF]
                                    )
                                }
                            }
                        }
                    }
                    dataFromJson: allAlbumsJson {
                        edges {
                            node {
                            title,
                            subtitle,
                            sectionId
                            content {
                                name
                                id
                            }
                            bgColor
                            }
                        }
                    }
                }
            `}

            render={(data: IAllImagesAndJSON) => {
                const { images, dataFromJson } = data;
                return (
                    dataFromJson.edges.map(({ node }: { node: INodeData }) => (
                        <Album data={node} images={images} />
                    ))
                )
            }}
        />
    );
}

export default Albums;
