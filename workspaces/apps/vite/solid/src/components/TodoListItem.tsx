import { createSignal, type ParentProps } from "solid-js";
import { Button } from "./Button";
import { todoListStore } from "./TodoList.store";
import "./TodoListItem.css";

// TODO: test with orca & WAVE with aria vs with form.
// create form component (should be better for a11y but wanna see the difference)

export function TodoListItem(props: ParentProps<{ id: string }>) {
  const [beforeDelete, setBeforeDelete] = createSignal(false);

  return (
    <li class="todo-list-item">
      <span classList={{ text: true, "before-delete": beforeDelete() }}>
        {props.children}
      </span>
      <Button
        size="hug"
        element={{
          tag: "button",
          attributes: {
            onClick: () => todoListStore.actions.removeFromList(props.id),
            onMouseEnter: () => setBeforeDelete(true),
            onMouseLeave: () => setBeforeDelete(false),
          },
        }}
      >
        remove
      </Button>
    </li>
  );
}

export function TodoListFormItem(props: ParentProps<{ id: string }>) {
  const [beforeDelete, setBeforeDelete] = createSignal(false);

  function submitRemove(event: Event) {
    event.preventDefault();
    todoListStore.actions.removeFromList(props.id);
  }

  return (
    <li class="todo-list-item">
      <span classList={{ text: true, "before-delete": beforeDelete() }}>
        {props.children}
      </span>
      <form onSubmit={submitRemove}>
        <Button
          size="hug"
          element={{
            tag: "button",
            attributes: {
              type: "submit",
              onMouseEnter: () => setBeforeDelete(true),
              onMouseLeave: () => setBeforeDelete(false),
            },
          }}
        >
          remove
        </Button>
      </form>
    </li>
  );
}
