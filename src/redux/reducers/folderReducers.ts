import { ADD_FOLDER, DELETE_FOLDER } from "../actions";
import { predefinedFolders } from "../predefinedFolders";

export interface Folder {
  id: string;
  text: string;
  subtitle: string;
}

export interface FolderState {
  folders: Folder[];
}

const initialState: FolderState = {
  folders: predefinedFolders,
};

function generateShortUuid(): string {
  return "xxxxxy".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const folderReducer = (
  state = initialState,
  action: any
): FolderState => {
  switch (action.type) {
    case ADD_FOLDER:
      return {
        folders: [
          ...state.folders,
          {
            id: generateShortUuid(),
            text: action.payload,
            subtitle: "Add subtitle",
          },
        ],
      };
    case DELETE_FOLDER:
      return {
        folders: state.folders.filter((folder) => folder.id !== action.payload),
      };
    default:
      return state;
  }
};
