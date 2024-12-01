import "@cartok/todo-list-styles/components/TodoListItem.css";
import clsx from "clsx";
import {
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type PropsWithChildren,
} from "react";
import { TodoListStoreContext } from "~/components/TodoList.store";
import { Button } from "./Button";

export function TodoListItem(props: PropsWithChildren<{ id: string }>) {
  const [beforeDelete, setBeforeDelete] = useState(false);
  const { dispatch } = useContext(TodoListStoreContext);

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
            onClick: () => dispatch({ type: "remove-from-list", id: props.id }),
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
  const { dispatch } = useContext(TodoListStoreContext);

  const submitRemove = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      dispatch({ type: "remove-from-list", id: props.id });
    },
    [props.id]
  );

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
