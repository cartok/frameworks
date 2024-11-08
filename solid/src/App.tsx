import { createEffect, createSignal, For, Index } from "solid-js";
import "./App.css";

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
      <h1>Vite + Solid</h1>
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
    </>
  );
}

export default App;
