import React from "react";
import { useSelector } from "react-redux";
import { Folder } from "../../redux/reducers/folderReducers";
import { useFolderContext } from "../../context/FolderContext";

import styles from "./Header.module.css";

interface Props {}

const Header: React.FC<Props> = (props) => {
  const { selectedFolderId } = useFolderContext();
  const selectFolderName: string = useSelector(
    (state: any) =>
      state.folder.folders?.find(
        (folder: Folder) => folder.id === selectedFolderId
      ).text
  );
  const selectFolderSubtitle: string = useSelector(
    (state: any) =>
      state.folder.folders?.find(
        (folder: Folder) => folder.id === selectedFolderId
      ).subtitle
  );
  return (
    <div className={styles.header}>
      <h1>{selectFolderName}</h1>
      <h3>{selectFolderSubtitle}</h3>
    </div>
  );
};

export default Header;
