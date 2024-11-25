import "@cartok/todo-list-styles/components/Button.css";
import { type JSX, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";
// TODO: fix
// eslint-disable-next-line import-x/no-unresolved
import { type ParentElementProps, type ValidElementAttributes } from "~/types";

type ValidElements = keyof Pick<
  JSX.IntrinsicElements,
  "button" | "a" | "div" | "span"
>;

type ButtonProps = {
  size?: "default" | "double" | "hug";
};

// TODO: Create some wrapper types or HOCs
// function withElement()
// function withAria()
// function withEvents()

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

  // eslint-disable-next-line solid/reactivity
  props = mergeProps(defaultProps, defaultElementProps, props);

  return (
    <Dynamic
      classList={{
        button: true,
        [props.size as string]: true,
      }}
      component={props.element.tag as string}
      {...props.element.attributes}
    >
      {props.children}
    </Dynamic>
  );
}
