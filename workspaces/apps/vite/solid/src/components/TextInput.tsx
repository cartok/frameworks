import {
  createSignal,
  type Accessor,
  type Setter,
  type VoidProps,
} from "solid-js";
import type { EventHandlerNames, ValidElementAttributes } from "~/types";
import "./TextInput.css";

export function TextInput(
  props: VoidProps<{
    initialValue?: string;
    attributes?: Omit<
      ValidElementAttributes<"input">,
      "type" | "value" | EventHandlerNames<HTMLInputElement, "Change">
    >;
  }>
) {
  const [value, setValue] = createSignal(props.initialValue);

  return (
    <input
      class="text-input"
      value={value()}
      onChange={(event) => setValue(event.target.value)}
      {...props.attributes}
    />
  );
}

export function TextInputControlled(
  props: VoidProps<{
    value: Accessor<string>;
    setValue: Setter<string>;
    attributes?: Omit<
      ValidElementAttributes<"input">,
      "type" | "value" | EventHandlerNames<HTMLInputElement, "Change">
    >;
  }>
) {
  return (
    <input
      class="text-input"
      value={props.value()}
      onChange={(event) => props.setValue(event.target.value)}
      {...props.attributes}
    />
  );
}
