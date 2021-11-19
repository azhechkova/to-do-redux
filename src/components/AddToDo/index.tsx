import React, { useState } from "react";
import { ToDoType } from "../ToDoList";
import "./AddToDo.scss";

interface Props {
  setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
}

const AddToDo = ({ setList }: Props) => {
  const [text, setText] = useState("");

  const newItem: ToDoType = {
    id: Math.floor(Math.random() * 100),
    name: text,
    completed: false,
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      setList((prev) => [...prev, newItem]);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input onInput={handleInput} value={text} className="add-todo-input" />
      <button type="submit" className="add-todo-button">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
