import "@cartok/todo-list-styles/components/TodoListItem.css";
import clsx from "clsx";
import {
  useCallback,
  useState,
  type FormEvent,
  type PropsWithChildren,
} from "react";
import { useAppDispatch } from "~/store/hooks";
import { removeTodo } from "~/store/slices/todos";
import { Button } from "./Button";

export function TodoListItemRedux(props: PropsWithChildren<{ id: string }>) {
  const [beforeDelete, setBeforeDelete] = useState(false);
  const dispatch = useAppDispatch();
  const submitRemove = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      dispatch(removeTodo(props.id));
    },
    [dispatch, props.id]
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
