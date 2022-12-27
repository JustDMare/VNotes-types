import type { Block } from "./blocks";

export interface NoteSchema {
  _id: string;
  parentID: string | null;
  title: string;
  createdTime: string; // timestamp
  lastUpdatedTime: string; // timestamp
  content: Block[];
}

export interface Note extends NoteSchema {}
