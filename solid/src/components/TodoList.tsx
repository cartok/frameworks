import { createSignal, createEffect, For, createUniqueId } from "solid-js";
import "./TodoList.css";
import { Button } from "./Button";
import { List } from "./List";
import { ListItem } from "./ListItem";

type ListItem = { text: string };

const [text, setText] = createSignal<string>("");
const [list, setList] = createSignal<Map<string, ListItem>>(
  new Map([
    // Mock
    [createUniqueId(), { text: "foo" }],
    [createUniqueId(), { text: "bar" }],
    [
      createUniqueId(),
      {
        text: "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque.",
      },
    ],
  ])
);

function addToList(event: Event) {
  event.preventDefault();

  if (!text()) {
    return;
  }

  setList(
    new Map([
      ...Array.from(list().entries()),
      [createUniqueId(), { text: text() }],
    ])
  );

  setText("");
}

export function removeFromList(id: string) {
  list().delete(id);
  setList(new Map(list().entries()));
}

export function TodoList() {
  createEffect(() => {
    console.log("text:", text());
    console.log("list:", list());
  });

  return (
    <div class="todo-list">
      <form class="form" onSubmit={addToList}>
        {/* <TextInput> */}
        <input
          value={text()}
          onInput={(e) => setText(e.target.value)}
          style={{
            "background-color": "red",
          }}
        />
        {/* WIP: checking some limits & patterns */}
        <Button attributes={{ type: "submit" }}>add</Button>
      </form>
      <List>
        <For each={Array.from(list().entries())}>
          {([id, item]) => <ListItem id={id}>{item.text}</ListItem>}
        </For>
      </List>
    </div>
  );
}
