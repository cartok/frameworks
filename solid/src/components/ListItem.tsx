import { children, type ParentProps } from "solid-js";
import "./ListItem.css";

export function ListItem(props: ParentProps) {
  const resolved = children(() => props.children);

  return (
    <li class="list-item">
      <span class="text">{resolved()}</span>
      <button class="button">remove</button>
    </li>
  );
}
