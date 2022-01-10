type TItem = "img" | "video";

interface IContent {
    type: TItem;
    name: string;
    path: string;
}

interface IGroup {
    title: string;
    subtitle: string;
    content: IContent[];
}

declare module "albums.json" {
    const value: IGroup[];
    export default value;
}

