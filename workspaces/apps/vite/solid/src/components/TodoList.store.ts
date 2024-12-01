import { createMemo, createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";

type TodoListItem = { text: string };
type TodoListItems = Map<string, TodoListItem>;
type TodoListStore = { items: TodoListItems };

const [store, setStore] = createStore<TodoListStore>({
  items: new Map(),
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
  const items = new Map(store.items);
  const sortedList: [string, TodoListItem][] = [
    [createUniqueId(), { text }],
    ...Array.from(items.entries()),
  ];
  setStore("items", new Map(sortedList));
}

function removeFromList(id: string) {
  const items = new Map(store.items);
  items.delete(id);
  setStore("items", new Map(items.entries()));
}

const items = createMemo(() => Array.from(store.items));

export const todoListStore = {
  items,
  actions: {
    addToList,
    removeFromList,
  },
};
