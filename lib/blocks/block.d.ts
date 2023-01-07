import type { CheckboxUniqueProperties } from "./checkbox";
export interface BlockSchema {
    _id: string;
    type: BlockType;
    content: string;
    uniqueProperties: BlockUniqueProperties;
}
export interface Block extends BlockSchema {
}
export declare const BLOCK_TYPES: readonly ["text", "heading_big", "heading_medium", "heading_small", "checkbox"];
export type BlockType = typeof BLOCK_TYPES[number];
export type BlockUniqueProperties = Partial<CheckboxUniqueProperties>;
