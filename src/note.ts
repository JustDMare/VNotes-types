import type { Block } from "./blocks";

export interface NoteSchema {
  _id: string;
  parentId?: Object;
  userSpaceId: Object;
  title: string;
  createdTime: string; // timestamp
  lastUpdatedTime: string; // timestamp
  content: Block[];
}

export interface Note extends Omit<NoteSchema, "userSpaceId"> {
  parentId?: string;
}
