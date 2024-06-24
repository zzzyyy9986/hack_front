import { makeAutoObservable } from "mobx";

export class Tasks {
  public t = "hey from store32343333kkk";
  constructor() {
    makeAutoObservable(this);
  }
}
export class Task {
  constructor() {
    makeAutoObservable(this);
  }
}
export const tasks = new Tasks();
