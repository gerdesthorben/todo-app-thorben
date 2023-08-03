import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Todos from "./components/Todos/Todos";
import LandingPage from "./components/landing-page/LandingPage";
import { useFolderContext } from "./context/FolderContext";

function App() {
  const { selectedFolderId } = useFolderContext();
  return (
    <div className="app">
      <Sidebar />
      {selectedFolderId ? <Todos /> : <LandingPage />}
    </div>
  );
}

export default App;
