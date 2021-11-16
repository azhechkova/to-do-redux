import { useContext } from "react";
import { ITodoContext, TodoContext } from "../../context/context";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";

export type ToDoType = { id: number; name: string; completed: boolean };

const ToDoList = () => {
  const { list } = useContext<ITodoContext>(TodoContext);

  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo />
        {list.map((item) => (
          <ToDoItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
