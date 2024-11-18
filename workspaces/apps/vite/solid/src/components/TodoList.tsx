import { createSignal, For, type Component } from "solid-js";
import { Button } from "~/components/Button";
import { todoListStore } from "~/components/TodoList.store";
import { TodoListItem } from "~/components/TodoListItem";
import "./TodoList.css";
import { TextInput } from "~/components/TextInput";

export const TodoList: Component = () => {
  const [text, setText] = createSignal<string>("");

  function addToList(event: Event) {
    event.preventDefault();

    if (!text()) {
      return;
    }

    todoListStore.actions.addToList(text());
  }

  return (
    <div class="todo-list">
      <form class="form" onSubmit={addToList}>
        <TextInput initialValue={text()} />
        <input value={text()} onInput={(e) => setText(e.target.value)} />
        <Button element={{ tag: "button", attributes: { type: "submit" } }}>
          add
        </Button>
      </form>
      <ol class="list">
        <For each={todoListStore.items()}>
          {([id, item]) => <TodoListItem id={id}>{item.text}</TodoListItem>}
        </For>
      </ol>
    </div>
  );
};
