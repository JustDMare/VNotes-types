import type { NavigationFolderReference } from "./folder";
import type { NavigationNoteReference } from "./note-reference";

export interface UserSpaceSchema {
	_id: Object;
	userToken: string;
}

export interface UserSpace extends UserSpaceSchema {
	content: {
		folders: NavigationFolderReference[];
		notes: NavigationNoteReference[];
	};
}
