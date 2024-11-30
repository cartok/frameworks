import "@cartok/todo-list-styles/components/TodoListItem.css";
import clsx from "clsx";
import { useState, type FormEvent, type PropsWithChildren } from "react";
import { Button } from "./Button";
import { todoListStore } from "./TodoList.store";

export function TodoListItem(props: PropsWithChildren<{ id: string }>) {
  const [beforeDelete, setBeforeDelete] = useState(false);

  return (
    <li className="todo-list-item">
      <span className={clsx("text", { "before-delete": beforeDelete })}>
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

export function TodoListFormItem(props: PropsWithChildren<{ id: string }>) {
  const [beforeDelete, setBeforeDelete] = useState(false);

  function submitRemove(event: FormEvent) {
    event.preventDefault();
    todoListStore.actions.removeFromList(props.id);
  }

  return (
    <li className="todo-list-item">
      <span className={clsx("text", { "before-delete": beforeDelete })}>
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
