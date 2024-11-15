import { createSignal, For } from "solid-js";
// TODO: eslint auto fix remove `type` if possible. vscode & jsx dont go so well together
// otherwise think about changing "typescript.preferences.preferTypeOnlyAutoImports".
// import type { Button } from "~/components/Button";
// import type { todoListStore } from "~/components/TodoList.store";
// import type { TodoListItem } from "~/components/TodoListItem";
import { Button } from "~/components/Button";
import { todoListStore } from "~/components/TodoList.store";
import { TodoListItem } from "~/components/TodoListItem";
import "./TodoList.css";

export function TodoList() {
  const [text, setText] = createSignal<string>("");

  function addToList(event: Event) {
    event.preventDefault();

    if (!text()) {
      return;
    }

    todoListStore.actions.addToList(text());
  }

  return (
    // TODO: Mal gucken wie mit scoped element selectors aussehen würde.
    // Man könnte sich halt abstraktion sparen und nur nutzen wenn es nötig ist bzw.
    // wenn ein tag mehr als einmal vorkommt und dabei mindestens zwei verschiedene
    // UI elemente rendert.
    <div class="todo-list">
      <form class="form" onSubmit={addToList}>
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
        <For each={todoListStore.items()}>
          {([id, item]) => <TodoListItem id={id}>{item.text}</TodoListItem>}
        </For>
      </ol>
    </div>
  );
}
