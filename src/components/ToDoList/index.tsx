import React from "react";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import { useStoreState } from "easy-peasy";
import "./ToDoList.scss";
import { StoreModel, ToDoType } from "../../store/models";

const ToDoList = () => {
  const todoList = useStoreState<StoreModel>((state) => state.todoList);

  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo />
        {todoList.map((todo: ToDoType) => (
          <ToDoItem item={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
