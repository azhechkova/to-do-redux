import { CaseReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

export type ToDoType = { id: any; name: string; completed: boolean };

export const addItem = createAction("ADD", (item) => {
  return {
    payload: {
      item,
    },
  };
});

export const deleteItem = createAction("DELETE", (id) => {
  return {
    payload: {
      id,
    },
  };
});

export const check = createAction("CHECK", (id) => {
  return {
    payload: {
      id,
    },
  };
});
