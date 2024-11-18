import { children, createContext, type ParentProps } from "solid-js";

// TODO: finish

export const TodoListContext = createContext<Map<string, ListItem>>();

export function TodoListContextProvider(props: ParentProps) {
  const memorizedChildren = children(() => props.children);

  return (
    <TodoListContext.Provider value={null}>
      {memorizedChildren()}
    </TodoListContext.Provider>
  );
}
