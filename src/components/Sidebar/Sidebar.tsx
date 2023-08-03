import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_FOLDER, DELETE_FOLDER } from "../../redux/actions";
import { useFolderContext } from "../../context/FolderContext";
import { Folder } from "../../redux/reducers/folderReducers";
import { IconButton } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Sidebar.module.css";
import Profile from "./Profile";

interface Props {}

const Sidebar: React.FC<Props> = (props) => {
  const folders = useSelector((state: any) => state.folder.folders);
  const dispatch = useDispatch();
  const [newFolder, setNewFolder] = useState<string>("");
  const { selectedFolderId, setSelectedFolderId } = useFolderContext();

  const handleAddFolder = (newFolderText: string) => {
    if (newFolderText.length > 2) {
      dispatch({ type: ADD_FOLDER, payload: newFolderText });
      setNewFolder("");
    }
  };

  const handleDeleteFolder = (folderId: string) => {
    dispatch({ type: DELETE_FOLDER, payload: folderId });
    if (folderId === selectedFolderId) {
      setSelectedFolderId(null);
    }
  };

  const handleFolderClick = (folderId: string) => {
    setSelectedFolderId(folderId);
  };

  return (
    <div className={styles.sidebar}>
      <Profile />
      <h2>Folders</h2>
      <ul>
        {folders.map((folder: Folder) => (
          <li
            key={folder.id}
            onClick={() => handleFolderClick(folder.id)}
            style={{
              backgroundColor:
                folder.id === selectedFolderId ? "#ff7f5080" : "inherit",
              cursor: "pointer",
            }}
          >
            <span>{folder.text}</span>
            <IconButton
              onClick={() => {
                handleDeleteFolder(folder.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="+ Create new folder"
        className={styles.addFolder}
        value={newFolder}
        onChange={(e) => setNewFolder(e.target.value)}
        onBlur={() => {
          handleAddFolder(newFolder);
        }}
      />
    </div>
  );
};

export default Sidebar;
