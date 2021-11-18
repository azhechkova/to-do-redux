import { ToDoType } from "../actions";

interface AddType {
  type: "ADD";
  item: ToDoType;
}
interface DeleteType {
  type: "DELETE";
  id: number;
}
interface CheckType {
  type: "CHECK";
  id: number;
}

type ActionType = AddType | DeleteType | CheckType;
export type RootState = ReturnType<typeof reducer>;

const reducer = (state: ToDoType[] = [], action: ActionType) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    case "DELETE":
      return (state = state.filter((todo: ToDoType) => todo.id !== action.id!));

    case "CHECK":
      const newState = state.map((item) => {
        if (item.id === action.id) {
          item.completed = !item.completed;
          return item;
        }
        return item;
      });

      return (state = newState);
    default:
      return state;
  }
};

export default reducer;
