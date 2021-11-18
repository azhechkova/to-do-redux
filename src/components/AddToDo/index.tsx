import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, ToDoType } from "../../store/reducers";
import "./AddToDo.scss";

const AddToDo = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

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
      dispatch(addTodo(newItem));
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
