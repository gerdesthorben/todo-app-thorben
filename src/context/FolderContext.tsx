import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren,
} from "react";

interface FolderContextData {
  selectedFolderId: string | null;
  setSelectedFolderId: (id: string | null) => void;
}

interface FolderContextProviderProps {}

const FolderContext = createContext<FolderContextData>({
  selectedFolderId: null,
  setSelectedFolderId: () => {},
});

export const useFolderContext = () => useContext(FolderContext);

const FolderContextProvider: React.FC<
  PropsWithChildren<FolderContextProviderProps>
> = ({ children }) => {
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);

  return (
    <FolderContext.Provider value={{ selectedFolderId, setSelectedFolderId }}>
      {children}
    </FolderContext.Provider>
  );
};

export default FolderContextProvider;
