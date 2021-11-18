import React from "react";
import { useDispatch } from "react-redux";
import "./ToDoItem.scss";
import { check, removeTodo, ToDoType } from "../../store/reducers";
interface Props {
  item: ToDoType;
}

const ToDoItem = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>
      <h3 className="todo-title">{item.name}</h3>
      <div className="todo-controls">
        <input
          type="checkbox"
          className="todo-check"
          onClick={() => dispatch(check(item.id))}
        />
        <button
          onClick={() => dispatch(removeTodo(item.id))}
          className="todo-delete"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
