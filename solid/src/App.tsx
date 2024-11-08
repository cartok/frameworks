import { createEffect, createSignal, For } from "solid-js";
import "./App.css";
import { Header } from "./components/Header";

type ListItem = { text: string };

function App() {
  const [text, setText] = createSignal<string>("");
  const [list, setList] = createSignal<ListItem[]>([
    { text: "foo" },
    { text: "bar" },
  ]);

  function addToList(event: Event) {
    event.preventDefault();

    setList([...list(), { text: text() }]);
    setText("");
  }

  createEffect(() => {
    console.log("text:", text());
    console.log("list:", list());
  });

  return (
    <>
      <Header>Vite + Solid</Header>
      <div class="content">
        {/* WIP CSS */}
        {/* <a href="https://www.google.de">google.de</a> */}
        <form on:submit={addToList}>
          <input
            value={text()}
            on:input={(e) => setText(e.target.value)}
            style={{
              "background-color": "red",
            }}
          />
          <button type="submit">add</button>
        </form>
        <ol>
          <For each={list()}>{(item) => <li>{item.text}</li>}</For>
        </ol>
      </div>
    </>
  );
}

export default App;
