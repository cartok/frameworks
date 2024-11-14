import { children, type ParentProps } from "solid-js";
import "./Header.css";

export function Header(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return (
    <header class="header">
      <h1 class="title">TODO List</h1>
      <div class="framework">(in {memorizedChildren()})</div>
    </header>
  );
}
