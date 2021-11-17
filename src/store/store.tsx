import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer as any,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

export default store;
