import "@cartok/todo-list-styles/components/TextInput.css";
import { useState, type Dispatch } from "react";
import type { ValidElementAttributes } from "~/types";

export function TextInput(props: {
  initialValue?: string;
  attributes?: Omit<
    ValidElementAttributes<"input">,
    "type" | "value" | "onChange"
  >;
}) {
  const [value, setValue] = useState(props.initialValue);

  return (
    <input
      className="text-input"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      {...props.attributes}
    />
  );
}

export function TextInputControlled(props: {
  value: string;
  setValue: Dispatch<string>;
  attributes?: Omit<
    ValidElementAttributes<"input">,
    "type" | "value" | "onChange"
  >;
}) {
  return (
    <input
      className="text-input"
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
      {...props.attributes}
    />
  );
}
