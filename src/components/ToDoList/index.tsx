import { useContext } from "react";
import { ITodoContext, TodoContext } from "../../context/context";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";

const ToDoList = () => {
  const { list } = useContext<ITodoContext>(TodoContext);

  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo />
        {list.map((todo) => (
          <ToDoItem item={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
