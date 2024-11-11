import { children, type ParentProps } from "solid-js";
import "./ListItem.css";
import { Button } from "./Button";
// CYCLIC DEP!
import { removeFromList } from "./TodoList";

export function ListItem(props: ParentProps & { id: string }) {
  const memorizedChildren = children(() => props.children);

  return (
    <li class="list-item">
      <span class="text">{memorizedChildren()}</span>
      {/* Override by atomic class */}
      <Button
        size="hug"
        // class="px-5"
        // Versus function passen
        attributes={{ onClick: () => removeFromList(props.id) }}
      >
        remove
      </Button>
    </li>
  );
}
