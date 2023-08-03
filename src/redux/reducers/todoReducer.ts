import { MARK_COMPLETE, ADD_TODO, DELETE_TODO } from "../actions";
import { predefinedTodos } from "../predefinedTodos";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  folderId: string;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: predefinedTodos,
};

function generateShortUuid(): string {
  return "xxxxxy".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const todoReducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: generateShortUuid(),
            text: action.payload.text,
            completed: false,
            folderId: action.payload.folderId,
          },
        ],
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
