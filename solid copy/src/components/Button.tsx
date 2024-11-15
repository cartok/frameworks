import {
  type JSX,
  type ParentProps,
  children as getMemorizedChildren,
} from "solid-js";
import { Dynamic } from "solid-js/web";
// TODO: aliased imports, maybe setup monorepo.
import "./Button.css";
import type { DynamicHTMLElementProps } from "../types";

// function isElement(props: unknown): props is JSX.IntrinsicElements["button"] {
//   return props.element === element;
// }

export function Button<T extends keyof JSX.IntrinsicElements = "button">(
  props: ParentProps &
    // TODO: Too much / not enough?
    // -> Vielleicht sollte man explizit nur eine auswahl erlauben: `button, a, div, span`
    //    Für all diese dann explizit festlegen, welche props davon verwendbar sind.
    //    Denke hierfür ist eine Abstraktion gut angebracht.
    //    Die komponente soll den button style bringen aber auch links usw. erlauben, ohne dass
    //    man wrappen muss, bei `link` in `button` könnte auch sonarlint meckern.
    DynamicHTMLElementProps<T> & {
      size?: "default" | "double" | "hug";
      // Nothing I would want to see at all, just a test.
      // TODO: remove, cleanup
      class?: string;
    }
) {
  props = { element: "button" as T, size: "default", ...props };

  let attributes = {};

  if (props.element === "button") {
    attributes = { type: "button", ...props.attributes };
  }

  const memorizedChildren = getMemorizedChildren(() => props.children);

  return (
    <Dynamic
      classList={{
        [props.class!]: props.class,
        button: true,
        [props.size as string]: true,
      }}
      component={props.element as string}
      {...attributes}
    >
      {memorizedChildren()}
    </Dynamic>
  );
}
