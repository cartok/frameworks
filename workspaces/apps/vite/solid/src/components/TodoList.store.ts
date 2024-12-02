import type { Store, TodoListItem } from "@cartok/todo-list-types";
import { createMemo, createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";

const [store, setStore] = createStore<Store>({
  todos: new Map(),
});

// Just some mocks
// eslint-disable-next-line solid/reactivity
addToList("foo");
// eslint-disable-next-line solid/reactivity
addToList("bar");
// eslint-disable-next-line solid/reactivity
addToList(
  "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque."
);

function addToList(text: string) {
  const prev = new Map(store.todos);
  const next: [string, TodoListItem][] = [
    [createUniqueId(), { text }],
    ...Array.from(prev.entries()),
  ];
  setStore("todos", new Map(next));
}

function removeFromList(id: string) {
  const prev = new Map(store.todos);
  prev.delete(id);
  setStore("todos", new Map(prev.entries()));
}

const todos = createMemo(() => Array.from(store.todos));

export const todoListStore = {
  todos,
  actions: {
    addToList,
    removeFromList,
  },
};
