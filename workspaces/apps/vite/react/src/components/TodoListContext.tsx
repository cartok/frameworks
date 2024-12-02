import type { Store, TodoListItem } from "@cartok/todo-list-types";
import { createContext, type Dispatch, type Reducer } from "react";

type Action<ActionName, ActionContext extends Record<string, unknown>> = {
  type: ActionName;
} & ActionContext;

type AddToListAction = Action<"add-to-list", { item: TodoListItem }>;
type RemoveFromListAction = Action<"remove-from-list", { id: string }>;
type Actions = AddToListAction | RemoveFromListAction;

export const initialState: Store = {
  todos: new Map([
    [
      crypto.randomUUID(),
      {
        text: "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque.",
      },
    ],
    [crypto.randomUUID(), { text: "bar" }],
    [crypto.randomUUID(), { text: "foo" }],
  ]),
};

export const TodoListStoreContext = createContext<{
  state: Store;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => undefined });

export const reducer: Reducer<Store, Actions> = (state, action) => {
  if (action.type === "add-to-list") {
    const items = new Map(state.todos);
    const sortedMap: [string, TodoListItem][] = [
      [crypto.randomUUID(), action.item],
      ...Array.from(items.entries()),
    ];
    return { todos: new Map(sortedMap) };
  } else if (action.type === "remove-from-list") {
    const items = new Map(state.todos);
    items.delete(action.id);
    return { todos: new Map(items.entries()) };
  }

  throw new Error("Unknown action");
};
