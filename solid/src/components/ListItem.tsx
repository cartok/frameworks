import { children, type ParentProps } from "solid-js";
import "./ListItem.css";

export function ListItem(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return (
    <li class="list-item">
      <span class="text">{memorizedChildren()}</span>
      {/* TODO: use Button with hug style? */}
      <button class="button">remove</button>
    </li>
  );
}
