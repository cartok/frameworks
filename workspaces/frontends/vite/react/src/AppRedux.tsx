import "@cartok/todo-list-styles/App.css";
import { Content } from "~/components/Content";
import { Header } from "~/components/Header";
import { TodoListRedux } from "~/components/TodoListRedux";

function App() {
  return (
    <>
      <Header>React.js</Header>
      <Content>
        <TodoListRedux />
      </Content>
    </>
  );
}

export default App;
