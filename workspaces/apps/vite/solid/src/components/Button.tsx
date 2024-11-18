import { type JSX, createMemo, mergeProps } from "solid-js";
import type { ParentElementProps, ValidElementAttributes } from "~/types";
import "./Button.css";

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

  const Element = createMemo<string>(() => props.element.tag);
  const mergedProps = mergeProps(defaultProps, defaultElementProps, props);

  // TODO: finish basic component
  // TODO: aria

  return (
    <Element
      classList={{
        button: true,
        [mergedProps.size as string]: true,
      }}
      component={props.element.tag}
      {...mergedProps.element.attributes}
    >
      {mergedProps.children}
    </Element>
  );
}

function TEST() {
  return (
    <Button element={{ tag: "button", attributes: { type: "" } }}>sdf</Button>
  );
}
