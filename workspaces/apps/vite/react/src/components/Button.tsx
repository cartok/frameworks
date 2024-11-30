import "@cartok/todo-list-styles/components/Button.css";
import clsx from "clsx";
import mergeProps from "merge-props";
import { type JSX } from "react";
import { type ParentElementProps, type ValidElementAttributes } from "~/types";

type ValidElements = keyof Pick<
  JSX.IntrinsicElements,
  "button" | "a" | "div" | "span"
>;

type ButtonProps = {
  size?: "default" | "double" | "hug";
};

export function Button<T extends ValidElements>(
  props: ParentElementProps<T, ButtonProps>
) {
  const defaultProps: Partial<ButtonProps> = {
    size: "default",
  };

  const defaultElementProps: {
    [K in ValidElements]?: ValidElementAttributes<K>;
  } = {
    button: {
      type: "button",
    },
  };

  props = mergeProps(defaultProps, defaultElementProps, props);

  const Element = props.element.tag as string;

  return (
    <Element
      className={clsx("button", {
        [props.size as string]: true,
      })}
      {...props.element.attributes}
    >
      {props.children}
    </Element>
  );
}
