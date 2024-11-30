import { useId, useMemo } from "react";

type TodoListItem = { text: string };
type TodoListItems = Map<string, TodoListItem>;
type TodoListStore = { items: TodoListItems };

// Just some mocks
// addToList("foo");
// addToList("bar");
// addToList(
//   "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque."
// );

function addToList(text: string) {
  const sortedList: [string, TodoListItem][] = [
    ...Array.from(store.items.entries()),
    [createUniqueId(), { text }],
  ];

  sortedList.reverse();
  setStore("items", new Map(sortedList));
}

function removeFromList(id: string) {
  store.items.delete(id);
  setStore("items", new Map(store.items.entries()));
}

const items = createMemo(() => Array.from(store.items));

export const todoListStore = {
  items,
  actions: {
    addToList,
    removeFromList,
  },
};
