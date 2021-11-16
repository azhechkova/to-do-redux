import "./App.css";
import ToDoList from "./components/ToDoList";
import { TodoProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
    </div>
  );
}

export default App;
