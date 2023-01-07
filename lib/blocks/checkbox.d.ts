import type { Block, BlockUniqueProperties } from "./block";
export interface CheckboxBlock extends Block {
    type: "checkbox";
    uniqueProperties: BlockUniqueProperties & CheckboxUniqueProperties;
}
export interface CheckboxUniqueProperties {
    selected: boolean;
}
