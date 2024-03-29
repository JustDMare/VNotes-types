import type { CheckboxUniqueProperties } from "./checkbox";

export interface BlockSchema {
  _id: string;
  type: BlockType;
  content: string; //Content of the block
  uniqueProperties: BlockUniqueProperties;
}

export interface Block extends BlockSchema {}

export const BLOCK_TYPES = <const>[
  "text",
  "heading_big",
  "heading_medium",
  "heading_small",
  "checkbox",
];
export type BlockType = typeof BLOCK_TYPES[number];

export type BlockUniqueProperties = Partial<CheckboxUniqueProperties>;
