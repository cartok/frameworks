import { type JSX, type ParentProps, children } from "solid-js";
import { Dynamic } from "solid-js/web";
import "./Button.css";

export function Button<T extends keyof JSX.IntrinsicElements>(
  props: ParentProps<{
    element?: T;
    props?: JSX.IntrinsicElements[T];
    size?: "default" | "double";
  }>
) {
  props = { element: "button" as T, size: "default", ...props };

  const resolved = children(() => props.children);

  return (
    <Dynamic
      // classList={{ button: true, [props.size as string]: true }}
      component={props.element}

      // {...props.props}
    >
      {resolved()}
    </Dynamic>
  );
}
