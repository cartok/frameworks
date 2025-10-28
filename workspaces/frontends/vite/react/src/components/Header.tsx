import "@cartok/todo-list-styles/components/Header.css";
import type { PropsWithChildren } from "react";

export function Header(props: PropsWithChildren) {
  return (
    <header className="header">
      <h1 className="title">TODO List</h1>
      <h4 className="framework">(in {props.children})</h4>
    </header>
  );
}
