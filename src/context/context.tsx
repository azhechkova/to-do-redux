import React, { useState, Dispatch } from "react";
import { ToDoType } from "../components/ToDoList";

export interface ITodoContext {
  list: ToDoType[];
  setList?: Dispatch<ToDoType[]>;
  addItem?: (id: ToDoType) => void;
  deleteItem?: (id: number) => void;
  check?: (id: number) => void;
}

const defaultState = {
  list: [],
};

export const TodoContext = React.createContext<ITodoContext>(defaultState);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [list, setList] = useState<ToDoType[]>(defaultState.list);

  const addItem = (item: ToDoType) => {
    setList((prev) => [...prev, item]);
  };

  const deleteItem = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const check = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      return item;
    });
    setList(newList);
  };

  return (
    <TodoContext.Provider value={{ list, setList, addItem, deleteItem, check }}>
      {children}
    </TodoContext.Provider>
  );
};
