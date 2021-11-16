import { useContext } from "react";
import { ITodoContext, TodoContext } from "../../context/context";
import { ToDoType } from "../ToDoList";
import "./ToDoItem.scss";

interface Props {
  item: ToDoType;
}

const ToDoItem = ({ item }: Props) => {
  const { deleteItem, check } = useContext<ITodoContext>(TodoContext);

  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>
      <h3 className="todo-title">{item.name}</h3>
      <div className="todo-controls">
        <input
          type="checkbox"
          className="todo-check"
          onClick={() => check!(item.id)}
        />
        <button onClick={() => deleteItem!(item.id)} className="todo-delete">
          X
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
