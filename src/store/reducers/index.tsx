import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type ToDoType = { id: any; name: string; completed: boolean };

export const initialState = [] as ToDoType[];

const todoSlice = createSlice({
  name: "todoList",
  initialState,

  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ToDoType>) => {
        state.push(action.payload);
      },
      prepare: (item: ToDoType) => {
        return {
          payload: item,
        };
      },
    },

    removeTodo: {
      reducer: (state, action: PayloadAction<number>) => {
        const newState = state.filter((todo) => todo.id !== action.payload);
        return (state = newState);
      },
      prepare: (id: number) => {
        return { payload: id };
      },
    },

    check: {
      reducer: (state, action: PayloadAction<number>) => {
        const newState = state.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
            return todo;
          }
          return todo;
        });
        state = newState;
      },
      prepare: (id: number) => {
        return { payload: id };
      },
    },
  },
});

const { actions, reducer } = todoSlice;

export const { check, removeTodo, addTodo } = actions;
export type RootState = ReturnType<typeof reducer>;
export default reducer;
