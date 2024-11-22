import type { JSX, ParentProps, VoidProps } from "solid-js";

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
> = ParentProps<ElementProps<T> & K>;

export type VoidElementProps<T extends keyof JSX.IntrinsicElements> = VoidProps<
  ElementProps<T>
>;

// -------------------------------------------------------------------------------------------------
// TODO: Finish topic and create PR for solidjs?

type EventNamesCamelCase<T> = {
  Abort?: JSX.EventHandlerUnion<T, Event> | undefined;
  AnimationEnd?: JSX.EventHandlerUnion<T, AnimationEvent> | undefined;
  AnimationIteration?: JSX.EventHandlerUnion<T, AnimationEvent> | undefined;
  AnimationStart?: JSX.EventHandlerUnion<T, AnimationEvent> | undefined;
  AuxClick?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  BeforeInput?: JSX.InputEventHandlerUnion<T, InputEvent> | undefined;
  BeforeToggle?: JSX.EventHandlerUnion<T, ToggleEvent> | undefined;
  Blur?: JSX.FocusEventHandlerUnion<T, FocusEvent> | undefined;
  CanPlay?: JSX.EventHandlerUnion<T, Event> | undefined;
  CanPlayThrough?: JSX.EventHandlerUnion<T, Event> | undefined;
  Change?: JSX.ChangeEventHandlerUnion<T, Event> | undefined;
  Click?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  CompositionEnd?: JSX.EventHandlerUnion<T, CompositionEvent> | undefined;
  CompositionStart?: JSX.EventHandlerUnion<T, CompositionEvent> | undefined;
  CompositionUpdate?: JSX.EventHandlerUnion<T, CompositionEvent> | undefined;
  ContextMenu?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  Copy?: JSX.EventHandlerUnion<T, ClipboardEvent> | undefined;
  Cut?: JSX.EventHandlerUnion<T, ClipboardEvent> | undefined;
  DblClick?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  Drag?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DragEnd?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DragEnter?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DragExit?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DragLeave?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DragOver?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DragStart?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  Drop?: JSX.EventHandlerUnion<T, DragEvent> | undefined;
  DurationChange?: JSX.EventHandlerUnion<T, Event> | undefined;
  Emptied?: JSX.EventHandlerUnion<T, Event> | undefined;
  Encrypted?: JSX.EventHandlerUnion<T, Event> | undefined;
  Ended?: JSX.EventHandlerUnion<T, Event> | undefined;
  Error?: JSX.EventHandlerUnion<T, Event> | undefined;
  Focus?: JSX.FocusEventHandlerUnion<T, FocusEvent> | undefined;
  FocusIn?: JSX.FocusEventHandlerUnion<T, FocusEvent> | undefined;
  FocusOut?: JSX.FocusEventHandlerUnion<T, FocusEvent> | undefined;
  GotPointerCapture?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  Input?: JSX.InputEventHandlerUnion<T, InputEvent> | undefined;
  Invalid?: JSX.EventHandlerUnion<T, Event> | undefined;
  KeyDown?: JSX.EventHandlerUnion<T, KeyboardEvent> | undefined;
  KeyPress?: JSX.EventHandlerUnion<T, KeyboardEvent> | undefined;
  KeyUp?: JSX.EventHandlerUnion<T, KeyboardEvent> | undefined;
  Load?: JSX.EventHandlerUnion<T, Event> | undefined;
  LoadedData?: JSX.EventHandlerUnion<T, Event> | undefined;
  LoadedMetadata?: JSX.EventHandlerUnion<T, Event> | undefined;
  LoadStart?: JSX.EventHandlerUnion<T, Event> | undefined;
  LostPointerCapture?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  MouseDown?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  MouseEnter?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  MouseLeave?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  MouseMove?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  MouseOut?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  MouseOver?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  MouseUp?: JSX.EventHandlerUnion<T, MouseEvent> | undefined;
  Paste?: JSX.EventHandlerUnion<T, ClipboardEvent> | undefined;
  Pause?: JSX.EventHandlerUnion<T, Event> | undefined;
  Play?: JSX.EventHandlerUnion<T, Event> | undefined;
  Playing?: JSX.EventHandlerUnion<T, Event> | undefined;
  PointerCancel?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerDown?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerEnter?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerLeave?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerMove?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerOut?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerOver?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  PointerUp?: JSX.EventHandlerUnion<T, PointerEvent> | undefined;
  Progress?: JSX.EventHandlerUnion<T, ProgressEvent> | undefined;
  RateChange?: JSX.EventHandlerUnion<T, Event> | undefined;
  Reset?: JSX.EventHandlerUnion<T, Event> | undefined;
  Scroll?: JSX.EventHandlerUnion<T, Event> | undefined;
  ScrollEnd?: JSX.EventHandlerUnion<T, Event> | undefined;
  Seeked?: JSX.EventHandlerUnion<T, Event> | undefined;
  Seeking?: JSX.EventHandlerUnion<T, Event> | undefined;
  Select?: JSX.EventHandlerUnion<T, Event> | undefined;
  Stalled?: JSX.EventHandlerUnion<T, Event> | undefined;
  Submit?: JSX.EventHandlerUnion<T, SubmitEvent> | undefined;
  Suspend?: JSX.EventHandlerUnion<T, Event> | undefined;
  TimeUpdate?: JSX.EventHandlerUnion<T, Event> | undefined;
  Toggle?: JSX.EventHandlerUnion<T, ToggleEvent> | undefined;
  TouchCancel?: JSX.EventHandlerUnion<T, TouchEvent> | undefined;
  TouchEnd?: JSX.EventHandlerUnion<T, TouchEvent> | undefined;
  TouchMove?: JSX.EventHandlerUnion<T, TouchEvent> | undefined;
  TouchStart?: JSX.EventHandlerUnion<T, TouchEvent> | undefined;
  TransitionCancel?: JSX.EventHandlerUnion<T, TransitionEvent> | undefined;
  TransitionEnd?: JSX.EventHandlerUnion<T, TransitionEvent> | undefined;
  TransitionRun?: JSX.EventHandlerUnion<T, TransitionEvent> | undefined;
  TransitionStart?: JSX.EventHandlerUnion<T, TransitionEvent> | undefined;
  VolumeChange?: JSX.EventHandlerUnion<T, Event> | undefined;
  Waiting?: JSX.EventHandlerUnion<T, Event> | undefined;
  Wheel?: JSX.EventHandlerUnion<T, WheelEvent> | undefined;
};

/**
 * Die Idee ist es einfacher omitten zu können.
 * Müsste das vlt. noch einfacher verwendbar machen, mit nur einem Parameter, aber unsicher.
 * Desweiteren sollte das mit in `ValidElementAttributes` gemixed werden können, damit man nicht
 * all zu viele types mixen muss.
 */
export type EventHandlerNames<
  Element,
  Name extends keyof EventNamesCamelCase<Element>
> = `on${Name}` | `on${Lowercase<Name>}` | `on:${Lowercase<Name>}`;
