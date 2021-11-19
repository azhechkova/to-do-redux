import React, { useState } from "react";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";
import "./ToDoList.scss";

export type ToDoType = { id: number; name: string; completed: boolean };

const ToDoList = () => {
  const [list, setList] = useState<ToDoType[]>([]);

  return (
    <div className="todo-list">
      <div className="container">
        <AddToDo setList={setList} />

        {list.map((todo) => (
          <ToDoItem list={list} setList={setList} item={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
