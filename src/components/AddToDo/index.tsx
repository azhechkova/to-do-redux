import React, { useState } from "react";
import { ToDoType } from "../ToDoList";
interface Props {
  setList: React.Dispatch<React.SetStateAction<ToDoType[]>>;
  list: ToDoType[];
}
const AddToDo = ({ setList, list }: Props) => {
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

    setList((prev) => [...prev, newItem]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onInput={handleInput} value={name} />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddToDo;
