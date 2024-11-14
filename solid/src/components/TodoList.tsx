import { createSignal, createEffect, For, createUniqueId } from "solid-js";
import "./TodoList.css";
import { Button } from "./Button";
import { TodoListItem } from "./TodoListItem";

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
    // TODO: Mal gucken wie mit scoped element selectors aussehen würde.
    // Man könnte sich halt abstraktion sparen und nur nutzen wenn es nötig ist bzw.
    // wenn ein tag mehr als einmal vorkommt und dabei mindestens zwei verschiedene
    // UI elemente rendert.
    <div class="todo-list todo-list--foo --flag --flick">
      <form
        class="form todo-list-d todo-list--foo x todo-list-z "
        onSubmit={addToList}
      >
        {/* TODO: Also try out input binding in the frameworks */}
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
      <ol class="list">
        <For each={Array.from(list().entries())}>
          {([id, item]) => <TodoListItem id={id}>{item.text}</TodoListItem>}
        </For>
      </ol>
    </div>
  );
}
