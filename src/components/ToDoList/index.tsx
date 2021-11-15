import React from "react";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import { useStoreState } from "easy-peasy";
import "./ToDoList.scss";
import { StoreModel } from "../../store/models";

export type ToDoType = { id: number; name: string; completed: boolean };

const ToDoList = () => {
  const todoList = useStoreState<StoreModel>((state) => state.todoList);
  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo />

        {todoList.map((item: any) => (
          <ToDoItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
