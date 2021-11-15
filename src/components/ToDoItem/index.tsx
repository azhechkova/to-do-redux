import React from "react";
import { ToDoType } from "../ToDoList";

interface Props {
  item: ToDoType;
  setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  list: ToDoType[];
}

const ToDoItem = ({ item, setList, list }: Props) => {
  const handleCheck = () => {
    const newList = list.map((todo) => {
      if (todo.id === item.id) {
        item.completed = !item.completed;
        return item;
      }
      return todo;
    });
    setList(newList);
  };

  return (
    <div className="todo-item">
      <h3 className="todo-title">{item.name}</h3>
      <input type="checkbox" className="todo-check" onClick={handleCheck} />
    </div>
  );
};

export default ToDoItem;
