import { createUniqueId } from "solid-js";
import { createStore } from "solid-js/store";
import { mock } from "./TodoList.mock";

// Vorteil Store: Kann auch von Komponenten und anderem außerhalb des DOM scopes verwendet werden.
// Für so eine Liste macht das Sinn.

type TodoListItem = { text: string };
type TodoListItems = Map<string, TodoListItem>;

const [store, setStore] = createStore<TodoListItems>(mock);

export function addToList(text: string) {
  setStore(
    new Map([...Array.from(store.entries()), [createUniqueId(), { text }]])
  );
}

export function removeFromList(id: string) {
  store.delete(id);
  setStore(new Map(store.entries()));
}
