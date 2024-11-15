import { children, createSignal, type ParentProps } from "solid-js";
import { Button } from "./Button";
import "./TodoListItem.css";
import { todoListStore } from "./TodoList.store";
// CYCLIC DEP! (kinda, cause not importing the component but still, dunno...)
// import { removeFromList } from "./TodoList";

export function TodoListItem(props: ParentProps & { id: string }) {
  const memorizedChildren = children(() => props.children);
  const [beforeDelete, setBeforeDelete] = createSignal(false);

  return (
    <li class="todo-list-item">
      <span classList={{ text: true, "before-delete": beforeDelete() }}>
        {memorizedChildren()}
      </span>
      {/* TODO: <form>? */}
      <Button
        size="hug"
        attributes={{
          onClick: () => todoListStore.actions.removeFromList(props.id),
          onMouseEnter: () => setBeforeDelete(true),
          onMouseLeave: () => setBeforeDelete(false),
        }}
      >
        remove
      </Button>
    </li>
  );
}
