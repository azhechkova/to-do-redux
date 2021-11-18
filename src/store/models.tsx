import { Action } from "easy-peasy";

export interface StoreModel {
  todoList: ToDoType[];
  check: Action<StoreModel, number>;
  add: Action<StoreModel, ToDoType>;
  delete: Action<StoreModel, number>;
}

export type ToDoType = { id: number; name: string; completed: boolean };
