import "@cartok/todo-list-styles/components/TodoList.css";
import { createSignal, For, AccessorArray } from "solid-js";
import { Button } from "~/components/Button";
import { TextInputControlled } from "~/components/TextInput";
import { todoListStore } from "~/components/TodoList.store";
import { TodoListItem } from "~/components/TodoListItem";

export default "sdf";

export function TodoList() {
  const [text, setText] = createSignal<string>("");

  function submitAddToList(event: Event) {
    event.preventDefault();

    if (!text()) {
      return;
    }

    todoListStore.actions.addToList(text());
  }

  return (
    <div class="todo-list">
      <form class="form" onSubmit={submitAddToList}>
        <TextInputControlled value={text} setValue={setText} />
        <Button element={{ tag: "button", attributes: { type: "submit" } }}>
          add
        </Button>
      </form>
      <ul class="list">
        <For each={todoListStore.items()}>
          {([id, item]) => <TodoListItem id={id}>{item.text}</TodoListItem>}
          {/* TODO: cleanup */}
          {/* {([id, item]) => (
            <TodoListFormItem id={id}>{item.text}</TodoListFormItem>
          )} */}
        </For>
      </ul>
    </div>
  );
}
