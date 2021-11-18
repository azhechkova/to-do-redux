import React from "react";
import { useStoreActions } from "easy-peasy";
import "./ToDoItem.scss";
import { StoreModel, ToDoType } from "../../store/models";

interface Props {
  item: ToDoType;
}

const ToDoItem = ({ item }: Props) => {
  const check = useStoreActions<StoreModel>((actions) => actions.check);
  const deleteItem = useStoreActions<StoreModel>((actions) => actions.delete);

  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>
      <h3 className="todo-title">{item.name}</h3>
      <div className="todo-controls">
        <input
          type="checkbox"
          className="todo-check"
          onClick={() => check(item.id)}
        />
        <button onClick={() => deleteItem(item.id)} className="todo-delete">
          X
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
