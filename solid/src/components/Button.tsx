import {
  type JSX,
  type ParentProps,
  children as getMemorizedChildren,
} from "solid-js";
import { Dynamic } from "solid-js/web";
// TODO: aliased imports, maybe setup monorepo.
import "./Button.css";
import type { DynamicHTMLElementProps } from "../types";

export function Button<T extends keyof JSX.IntrinsicElements = "button">(
  props: ParentProps<
    DynamicHTMLElementProps<T> & {
      size?: "default" | "double" | "hug";
      // Nothing I would want to see at all, just a test.
      class?: string;
    }
  >
) {
  props = { element: "button" as T, size: "default", ...props };

  const memorizedChildren = getMemorizedChildren(() => props.children);

  return (
    <Dynamic
      classList={{
        [props.class!]: props.class,
        button: true,
        [props.size as string]: true,
      }}
      component={props.element as string}
      {...props.attributes}
    >
      {memorizedChildren()}
    </Dynamic>
  );
}
