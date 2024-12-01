import {
  createContext,
  useReducer,
  type Dispatch,
  type PropsWithChildren,
  type Reducer,
} from "react";

type TodoListItem = { text: string };
type TodoListItems = Map<string, TodoListItem>;
type TodoListStore = { items: TodoListItems };

type Action<ActionName, ActionContext extends Record<string, unknown>> = {
  type: ActionName;
} & ActionContext;

type AddToListAction = Action<"add-to-list", { item: TodoListItem }>;
type RemoveFromListAction = Action<"remove-from-list", { id: string }>;
type Actions = AddToListAction | RemoveFromListAction;

const initialState: TodoListStore = {
  items: new Map([
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
  state: TodoListStore;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => undefined });

const reducer: Reducer<TodoListStore, Actions> = (state, action) => {
  if (action.type === "add-to-list") {
    const items = new Map(state.items);
    const sortedMap: [string, TodoListItem][] = [
      [crypto.randomUUID(), action.item],
      ...Array.from(items.entries()),
    ];
    return { items: new Map(sortedMap) };
  } else if (action.type === "remove-from-list") {
    const items = new Map(state.items);
    items.delete(action.id);
    return { items: new Map(items.entries()) };
  }

  throw new Error("Unknown action");
};

export function TodoListStoreContextProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoListStoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoListStoreContext.Provider>
  );
}
