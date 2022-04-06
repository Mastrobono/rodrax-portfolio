type TItem = "img" | "video";
type TColor = "white" | "creme" | "gray";

interface IContent {
    type: TItem;
    name: string;
    id: "string";
    sliderPosition?: number;
}

interface IGroup {
    title: string;
    subtitle: string;
    content: IContent[];
    bgColor: TColor;
    sectionId: "photography" | "video" | "design";
}

declare module "albums.json" {
    const value: IGroup[];
    export default value;
}

