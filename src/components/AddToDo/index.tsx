import React, { useState } from "react";
import { StoreModel, ToDoType } from "../../store/models";
import { useStoreActions } from "easy-peasy";
import "./AddToDo.scss";

const AddToDo = () => {
  const [text, setText] = useState("");
  const add = useStoreActions<StoreModel>((actions) => actions.add);
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
      add(newItem);
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
