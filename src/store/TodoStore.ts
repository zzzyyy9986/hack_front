
import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import {uuidv4} from "./utils";

class Todo {
    id = uuidv4();
    title = "";
    completed = false;

    constructor(title:string) {
        makeAutoObservable(this);
        this.title = title;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

class TodoStore {
    public f = 'hey'
    todos:Todo[] = [new Todo(
        'f')];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(title:string) {
        this.todos.push(new Todo(title));
    }

    removeTodo(id:string) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
}

export const todoStore = new TodoStore();
