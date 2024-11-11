import { children, type ParentProps } from "solid-js";
import "./ListItem.css";
import { Button } from "./Button";

export function ListItem(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return (
    <li class="list-item">
      <span class="text">{memorizedChildren()}</span>
      {/* Override by atomic class */}
      <Button size="hug" class="px-5">
        remove
      </Button>
    </li>
  );
}
