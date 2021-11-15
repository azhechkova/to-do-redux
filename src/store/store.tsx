import { createStore, action } from "easy-peasy";
import { StoreModel } from "./models";

const store = createStore<StoreModel>({
  todoList: [],

  check: action((state, id) => {
    state.todoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
  }),

  add: action((state, item) => {
    state.todoList.push(item);
  }),

  delete: action((state, id) => {
    state.todoList = state.todoList.filter((item) => item.id !== id);
  }),
});

export default store;
