import { children, type ParentProps } from "solid-js";
import "./Header.css";

export function Header(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return (
    <header class="header">
      <h1 class="h1">TODO List</h1>
      <div class="h2">(in {memorizedChildren()})</div>
    </header>
  );
}
