import React, { useState } from "react";
import "./AddToDo.scss";
import { addItem, ToDoType } from "../../store/actions";

import { useDispatch } from "react-redux";

const AddToDo = () => {
  const [text, setText] = useState("");
  const dispath = useDispatch();

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
      dispath(addItem(newItem));
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
