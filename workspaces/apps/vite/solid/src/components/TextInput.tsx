import type { VoidComponent } from "solid-js";
import { createSignal } from "solid-js/types/server/reactive.js";

export const TextInput: VoidComponent<{ initialValue?: string }> = (props) => {
  const [value, setValue] = createSignal(props.initialValue);

  // TODO: aria

  return (
    <input
      class="text-input"
      value={value()}
      onChange={(event) => setValue(event.target.value)}
    />
  );
};
