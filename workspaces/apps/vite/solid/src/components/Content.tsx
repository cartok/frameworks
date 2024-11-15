import { children, type ParentProps } from "solid-js";
import "./Content.css";

// TODO: Properly setup eslint for all ts projects

const zzz = 1;
const x: boolean = 1 == zzz;

export function Content(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return <div class="content">{memorizedChildren()}</div>;
}
