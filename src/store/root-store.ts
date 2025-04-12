import { createContext } from "react";
import { todoStore } from "./TodoStore";
import { searchGl } from "./SearchStore";

export const TodoStoreContext = createContext({
  todoStore: todoStore,
  searchGl: searchGl,
});
