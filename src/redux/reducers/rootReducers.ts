import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import { folderReducer } from "./folderReducers";

const rootReducer = combineReducers({
  todo: todoReducer,
  folder: folderReducer,
});

export default rootReducer;
