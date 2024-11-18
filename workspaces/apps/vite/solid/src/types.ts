import type { JSX, ParentProps, VoidProps } from "solid-js";

export type ElementProps<T extends keyof JSX.IntrinsicElements> = {
  // TODO: Deep nesting might not be well supported.
  // Vielleicht doch namespace collision ignorieren und mit `Dynamic` gehen.
  // Sind die props recoursive reactive? Wäre krass wenn nicht aber sollte ich testen.
  element: {
    tag: T;
    attributes?: ValidElementAttributes<T>;
  };
};

export type ValidElementAttributes<T extends keyof JSX.IntrinsicElements> =
  Omit<JSX.IntrinsicElements[T], "class" | "classList">;

export type ParentElementProps<
  T extends keyof JSX.IntrinsicElements,
  K
> = ParentProps<ElementProps<T> & K>;

export type VoidElementProps<T extends keyof JSX.IntrinsicElements> = VoidProps<
  ElementProps<T>
>;
