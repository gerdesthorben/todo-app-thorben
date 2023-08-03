import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MARK_COMPLETE, ADD_TODO, DELETE_TODO } from "../../redux/actions";
import { Todo } from "../../redux/reducers/todoReducer";
import { useFolderContext } from "../../context/FolderContext";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./Todos.module.css";
import Header from "../Header/Header";

interface Props {}

const Todos: React.FC<Props> = (props) => {
  const todos: Todo[] = useSelector((state: any) => state.todo.todos);
  const { selectedFolderId } = useFolderContext();
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = (newTodoText: string) => {
    if (newTodoText.length > 2) {
      dispatch({
        type: ADD_TODO,
        payload: { text: newTodoText, folderId: selectedFolderId },
      });
      setNewTodo("");
    }
  };

  const handleToggleTodo = (todoId: string) => {
    dispatch({ type: MARK_COMPLETE, payload: todoId });
  };

  const handleDeleteTodo = (todoId: string) => {
    dispatch({ type: DELETE_TODO, payload: todoId });
  };

  const filterTodos = todos
    .filter((todo) => todo.folderId === selectedFolderId)
    .sort((todo1, todo2) => {
      if (todo1.completed === todo2.completed) {
        return 0;
      }
      return todo1.completed ? 1 : -1;
    });

  return (
    <div className={styles.todos}>
      <Header />

      <h2>Your ToDos:</h2>
      <ul>
        <AnimatePresence mode="sync">
          {filterTodos.map((todo: Todo) => (
            <motion.li
              key={todo.id}
              className={styles.todoItem}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.leftSide}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => {
                    handleToggleTodo(todo.id);
                  }}
                />
                <span style={{ color: todo.completed ? "coral" : "inherit" }}>
                  {todo.text}
                </span>
              </div>
              <IconButton
                onClick={() => {
                  handleDeleteTodo(todo.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <input
        type="text"
        placeholder="+ Create new ToDo"
        className={styles.addTodo}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onBlur={() => {
          handleAddTodo(newTodo);
        }}
      />
    </div>
  );
};

export default Todos;
