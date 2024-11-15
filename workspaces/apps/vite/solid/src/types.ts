import type { JSX } from "solid-js";

export type DynamicHTMLElementProps<T extends keyof JSX.IntrinsicElements> = {
  element?: T;
  attributes?: Omit<JSX.IntrinsicElements[T], "class" | "classList">;
};