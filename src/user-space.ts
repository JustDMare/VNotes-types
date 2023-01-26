import type { Folder } from "./folder";
import type { NavigationNoteReference } from "./note-reference";

export interface UserSpaceSchema {
  _id: string;
  authSubject: string;
}

export interface UserSpace extends Omit<UserSpaceSchema, "authSubject"> {
  content: {
    folders: Folder[];
    notes: NavigationNoteReference[];
  };
}
