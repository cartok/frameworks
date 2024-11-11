import { createUniqueId } from "solid-js";

export const mock = new Map([
  [createUniqueId(), { text: "foo" }],
  [createUniqueId(), { text: "bar" }],
  [
    createUniqueId(),
    {
      text: "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque.",
    },
  ],
]);
