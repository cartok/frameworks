import {
  type JSX,
  type ParentProps,
  children as getMemorizedChildren,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import type { DynamicHTMLElementProps } from "~/types";
import "./Button.css";

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
