import { children, type ParentComponent } from "solid-js";
import "./Content.css";

export const Content: ParentComponent = (props) => {
  const resolvedChildren = children(() => props.children);

  return <div class="content">{resolvedChildren()}</div>;
};
