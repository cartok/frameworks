import { children, createSignal, type ParentProps } from "solid-js";
import { Button } from "./Button";
import "./TodoListItem.css";
// CYCLIC DEP! (kinda, cause not importing the component but still, dunno...)
import { removeFromList } from "./TodoList";

export function TodoListItem(props: ParentProps & { id: string }) {
  const memorizedChildren = children(() => props.children);
  const [beforeDelete, setBeforeDelete] = createSignal(false);

  return (
    <li class="todo-list-item">
      <span classList={{ text: true, "before-delete": beforeDelete() }}>
        {memorizedChildren()}
      </span>
      {/* Override by atomic class */}
      <Button
        size="hug"
        // Müll, aber geht CSS ist geil heutzutage...
        class="px-5"
        // Versus function passen
        attributes={{
          onClick: () => removeFromList(props.id),
          onMouseEnter: () => setBeforeDelete(true),
          onMouseLeave: () => setBeforeDelete(false),
        }}
      >
        remove
      </Button>
    </li>
  );
}
