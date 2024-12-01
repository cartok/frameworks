import "@cartok/todo-list-styles/App.css";
import { Content } from "~/components/Content";
import { Header } from "~/components/Header";
import { TodoList } from "~/components/TodoList";
import { TodoListStoreContextProvider } from "~/components/TodoList.store";

function App() {
  return (
    <>
      <Header>React.js</Header>
      <Content>
        <TodoListStoreContextProvider>
          <TodoList />
        </TodoListStoreContextProvider>
      </Content>
    </>
  );
}

export default App;
