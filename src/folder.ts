import type { NavigationNoteReference } from "./note-reference";

export interface FolderSchema {
  _id: string;
  parentId: Object | null;
  name: string;
  createdTime: string;
  lastUpdatedTime: string;
}

export interface Folder extends FolderSchema {
  parentId: string;
  content: {
    folders: NavigationFolderReference[];
    notes: NavigationNoteReference[];
  };
  numberOfItems: number;
}

export type NavigationFolderReference = Omit<
  Folder,
  "createdTime" | "lastUpdatedTime"
>;
