import "@cartok/todo-list-styles/components/Button.css";
import clsx from "clsx";
import { deepmerge } from "deepmerge-ts";
import { createElement, type JSX } from "react";
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

  const mergedProps = deepmerge(
    { ...defaultProps, ...defaultElementProps },
    props
  );

  return createElement(
    mergedProps.element.tag,
    {
      className: clsx("button", {
        [mergedProps.size as string]: true,
      }),
      ...mergedProps.element.attributes,
    },
    mergedProps.children
  );
}
