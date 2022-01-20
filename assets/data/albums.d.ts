type TItem = "img" | "video";
type TColor = "white" | "creme";

interface IContent {
    type: TItem;
    name: string;
    path: string;
    sliderPosition?: number;
}

interface IGroup {
    title: string;
    subtitle: string;
    content: IContent[];
    bgColor: TColor;
}

declare module "albums.json" {
    const value: IGroup[];
    export default value;
}

