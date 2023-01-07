import type { Note } from "./note";
export type NavigationNoteReference = Omit<Note, "content">;
