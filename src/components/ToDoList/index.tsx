import React, { useState } from "react";
import AddToDo from "../AddToDo";
import ToDoItem from "../ToDoItem";

export type ToDoType = { id: any; name: string; completed: boolean };

const ToDoList = () => {
  const [list, setList] = useState<ToDoType[]>([]);
  return (
    <div className="todo-list">
      <AddToDo setList={setList} list={list} />

      {list.length &&
        list.map((item) => (
          <ToDoItem list={list} setList={setList} item={item} key={item.id} />
        ))}
    </div>
  );
};
export default ToDoList;
