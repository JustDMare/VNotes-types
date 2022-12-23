import type { Block } from "./blocks";
export default interface Note {
    noteID: string;
    parentID: string | null;
    title: string;
    createdTime: string;
    lastUpdatedTime: string;
    content: Block[];
}
