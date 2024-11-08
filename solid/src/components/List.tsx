import { children, type ParentProps } from "solid-js";
import "./List.css";

export function List(props: ParentProps) {
  const resolved = children(() => props.children);

  return <ol class="list">{resolved()}</ol>;
}
