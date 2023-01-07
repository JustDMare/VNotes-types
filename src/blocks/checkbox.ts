import type { Block, BlockUniqueProperties } from "./block";

export interface CheckboxBlock extends Block {
  type: "checkbox";
  uniqueProperties: BlockUniqueProperties & CheckboxUniqueProperties;
}

export default interface CheckboxUniqueProperties {
  selected: boolean;
}
