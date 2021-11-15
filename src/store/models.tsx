import { Action } from "easy-peasy";

export interface StoreModel {
  todoList: TodoItemType[];
  check: Action<StoreModel, number>;
  add: Action<StoreModel, TodoItemType>;
  delete: Action<StoreModel, number>;
}

export type TodoItemType = { id: number; name: string; completed: boolean };
