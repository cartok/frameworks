import { children, type ParentProps } from "solid-js";
import "./Header.css";

export function Header(props: ParentProps) {
  const resolved = children(() => props.children);

  return <h1 class="header">{resolved()}</h1>;
}
