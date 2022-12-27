import type { NavigationNoteReference } from "./note-reference";

export interface FolderSchema {
  _id: string;
  parentID: string | null;
  name: string;
  createdTime: string;
  lastUpdatedTime: string;
}

export interface Folder extends FolderSchema {
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
