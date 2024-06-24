import {createContext} from "react";
import {todoStore} from "./TodoStore";

export const TodoStoreContext = createContext({todoStore:todoStore});