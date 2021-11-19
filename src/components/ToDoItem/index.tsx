import React from "react";
import { ToDoType } from "../ToDoList";
import "./ToDoItem.scss";

interface Props {
  item: ToDoType;
  setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  list: ToDoType[];
}

const ToDoItem = ({ item, setList, list }: Props) => {
  const handleCheck = () => {
    const newList = list.map((todo) => {
      if (todo.id === item.id) {
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setList(newList);
  };
  const remove = () => {
    const newList = list.filter((todo) => todo.id !== item.id);
    setList(newList);
  };

  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>
      <h3 className="todo-title">{item.name}</h3>
      <div className="todo-controls">
        <input type="checkbox" className="todo-check" onClick={handleCheck} />
        <button onClick={remove} className="todo-delete">
          X
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
