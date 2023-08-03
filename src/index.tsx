import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import FolderContextProvider from "./context/FolderContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FolderContextProvider>
        <App />
      </FolderContextProvider>
    </Provider>
  </React.StrictMode>
);
