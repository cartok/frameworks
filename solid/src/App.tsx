import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <Header>Solid.js</Header>
      <div class="content">
        <TodoList />
      </div>
    </>
  );
}

export default App;
