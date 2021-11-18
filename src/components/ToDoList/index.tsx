import React, { useState } from "react";
import { ToDoType } from "../../store/actions";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state);
  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo />

        {todoList.map((item) => (
          <ToDoItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default ToDoList;
