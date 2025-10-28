import type { Store, TodoListItem } from "@cartok/todo-list-types";
import { createMemo, createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";

const [store, setStore] = createStore<Store>({
  todos: new Map(),
});

// Just some mocks
// eslint-disable-next-line solid/reactivity
addToList("1. foo");
// eslint-disable-next-line solid/reactivity
addToList("2. bar");
// eslint-disable-next-line solid/reactivity
addToList(
  "3. Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque."
);

// TODO: Use immer and eventually reverse the memo array.
function addToList(text: string) {
  const prevCopy = new Map(store.todos);
  const next: [string, TodoListItem][] = [
    [createUniqueId(), { text }],
    ...Array.from(prevCopy.entries()),
  ];
  setStore("todos", new Map(next));
}

function removeFromList(id: string) {
  const prevCopy = new Map(store.todos);
  prevCopy.delete(id);
  setStore("todos", new Map(prevCopy.entries()));
}

const todos = createMemo(() => Array.from(store.todos));

export const todoListStore = {
  todos,
  actions: {
    addToList,
    removeFromList,
  },
};
