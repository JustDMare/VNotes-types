import type { CheckboxUniqueProperties } from "./checkbox";
export default interface Block {
    blockID: string;
    parentID: string;
    type: BlockType;
    createdTime: string;
    lastUpdatedTime: string;
    content: string;
    uniqueProperties: BlockUniqueProperties;
}
export declare const BLOCK_TYPES: readonly ["text", "heading_big", "heading_medium", "heading_small", "checkbox"];
export type BlockType = typeof BLOCK_TYPES[number];
export type BlockUniqueProperties = Partial<CheckboxUniqueProperties>;
