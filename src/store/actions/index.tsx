export type ToDoType = { id: any; name: string; completed: boolean };

export const addItem = (item: ToDoType) => {
  return {
    type: "ADD",
    item,
  };
};

export const deleteItem = (id: number) => {
  return {
    type: "DELETE",
    id,
  };
};

export const check = (id: number) => {
  return {
    type: "CHECK",
    id,
  };
};
