import "./App.css";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <>
      <Header>Solid.js</Header>
      <Content>
        <TodoList />
      </Content>
    </>
  );
}

export default App;
