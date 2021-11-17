import React from "react";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";
import { useSelector } from "react-redux";
import { ToDoType } from "../../store/actions";
import { RootState } from "../../store/reducers";

const ToDoList = () => {
  const todoList = useSelector((state: RootState) => state);
  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo />

        {todoList.map(
          (item: { id: any; name?: string; completed?: boolean }) => (
            <ToDoItem item={item} key={item.id} />
          )
        )}
      </div>
    </div>
  );
};
export default ToDoList;
