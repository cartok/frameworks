import type { JSX, PropsWithChildren } from "react";

export type ElementProps<T extends keyof JSX.IntrinsicElements> = {
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
> = PropsWithChildren<ElementProps<T> & K>;
