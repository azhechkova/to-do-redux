import React, { useState } from "react";
import { StoreModel, ToDoType } from "../../store/models";
import { useStoreActions } from "easy-peasy";
import "./AddToDo.scss";

const AddToDo = () => {
  const [name, setName] = useState("");
  const add = useStoreActions<StoreModel>((actions) => actions.add);
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
      add(newItem);
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
