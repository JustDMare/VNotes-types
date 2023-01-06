import type { NavigationNoteReference } from "./note-reference";

export interface FolderSchema {
  _id: string;
  parentId?: Object;
  userSpaceId: Object;
  name: string;
  createdTime: string;
  lastUpdatedTime: string;
}

export interface Folder extends Omit<FolderSchema, "userSpaceId"> {
  parentId?: string;
  content: {
    folders: Folder[];
    notes: NavigationNoteReference[];
  };
  numberOfItems: number;
}
