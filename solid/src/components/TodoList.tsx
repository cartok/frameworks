import { createSignal, createEffect, For } from "solid-js";
import "./TodoList.css";
import { Button } from "./Button";
import { List } from "./List";
import { ListItem } from "./ListItem";

type ListItem = { text: string };

export function TodoList() {
  const [text, setText] = createSignal<string>("");
  const [list, setList] = createSignal<ListItem[]>([
    { text: "foo" },
    { text: "bar" },
    {
      text: "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque.",
    },
  ]);

  function addToList(event: Event) {
    event.preventDefault();

    if (!text()) {
      return;
    }

    setList([...list(), { text: text() }]);
    setText("");
  }

  createEffect(() => {
    console.log("text:", text());
    console.log("list:", list());
  });

  return (
    <div class="todo-list">
      <form class="form" on:submit={addToList}>
        {/* <TextInput> */}
        <input
          value={text()}
          on:input={(e) => setText(e.target.value)}
          style={{
            "background-color": "red",
          }}
        />
        {/* WIP: checking some limits & patterns */}
        <Button attributes={{ type: "submit" }}>add</Button>
      </form>
      <List>
        <For each={list()}>{(item) => <ListItem>{item.text}</ListItem>}</For>
      </List>
    </div>
  );
}
