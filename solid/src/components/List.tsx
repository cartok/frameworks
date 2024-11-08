import { children, type ParentProps } from "solid-js";
import "./List.css";

export function List(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return <ol class="list">{memorizedChildren()}</ol>;
}
