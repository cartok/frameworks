import "@cartok/todo-list-styles/components/Content.css";
import { children, type ParentProps } from "solid-js";

export function Content(props: ParentProps) {
  const resolvedChildren = children(() => props.children);

  return <div class="content">{resolvedChildren()}</div>;
}
