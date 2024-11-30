import "@cartok/todo-list-styles/components/Content.css";
import type { PropsWithChildren } from "react";

export function Content(props: PropsWithChildren) {
  return <div className="content">{props.children}</div>;
}
