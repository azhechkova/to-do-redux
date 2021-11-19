import React, { useState } from "react";
import { ToDoType } from "../ToDoList";
import "./AddToDo.scss";

interface Props {
  setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

const AddToDo = ({ setList }: Props) => {
  const [name, setName] = useState("");

  const newItem: ToDoType = {
    id: Math.floor(Math.random() * 100),
    name,
    completed: false,
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      setList((prev) => [...prev, newItem]);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input onInput={handleInput} value={name} className="add-todo-input" />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
