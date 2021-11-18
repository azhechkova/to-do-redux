import React from "react";
import { useDispatch } from "react-redux";
import { ToDoType } from "../../store/actions";
import "./ToDoItem.scss";
import { check, removeTodo } from "../../store/reducers";
interface Props {
  item: ToDoType;
}

const ToDoItem = ({ item }: Props) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(check(item.id));
  };
  const remove = () => {
    dispatch(removeTodo(item.id));
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
