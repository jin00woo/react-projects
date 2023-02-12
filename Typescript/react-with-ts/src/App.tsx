import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("Learn TS"), new Todo("Learn React")];

  return (
    <div>
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
