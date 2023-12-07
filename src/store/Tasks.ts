import { makeAutoObservable } from "mobx";

export class Tasks {
  public t = "hey from store";
  constructor() {
    makeAutoObservable(this);
  }
}
export class Task {
  constructor() {
    makeAutoObservable(this);
  }
}
