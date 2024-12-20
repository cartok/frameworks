import "@cartok/todo-list-styles/components/Header.css";
import { children, type ParentProps } from "solid-js";

export function Header(props: ParentProps) {
  const resolvedChildren = children(() => props.children);

  return (
    <header class="header">
      <h1 class="title">TODO List</h1>
      <h4 class="framework">(in {resolvedChildren()})</h4>
    </header>
  );
}
