import { children, type ParentProps } from "solid-js";
import "./Content.css";

export function Content(props: ParentProps) {
  const resolvedChildren = children(() => props.children);

  return <div class="content">{resolvedChildren()}</div>;
}
