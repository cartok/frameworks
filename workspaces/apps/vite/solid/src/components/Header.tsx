import { children, type ParentComponent } from "solid-js";
import "./Header.css";

export const Header: ParentComponent = (props) => {
  const resolvedChildren = children(() => props.children);

  return (
    <header class="header">
      <h1 class="title">TODO List</h1>
      <div class="framework">(in {resolvedChildren()})</div>
    </header>
  );
};
