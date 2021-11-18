import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, check, ToDoType } from "../../store/actions";
import "./ToDoItem.scss";

interface Props {
  item: ToDoType;
}

const ToDoItem = ({ item }: Props) => {
  const dispath = useDispatch();

  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>
      <h3 className="todo-title">{item.name}</h3>
      <div className="todo-controls">
        <input
          type="checkbox"
          className="todo-check"
          onChange={() => dispath(check(item.id))}
        />
        <button
          onClick={() => dispath(deleteItem(item.id))}
          className="todo-delete"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
