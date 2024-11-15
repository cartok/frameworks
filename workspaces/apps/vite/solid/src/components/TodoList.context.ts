// import { children, createContext, type ParentProps } from "solid-js";
// import { mock } from "./TodoList.mock";

// // Der context wrapped nur einen store, scoped ihn, oder nicht?

// // TODO: was tun mit den types... von store picken?
// type ListItem = { text: string };

// export const TodoListContext = createContext<Map<string, ListItem>>(mock);

// export function TodoListContextProvider(props: ParentProps) {
//   const memorizedChildren = children(() => props.children);

//   return (
//     // TODO: Extension nötig wegen dem "Cannot find namespace TodoListContext." error hier?
//     <TodoListContext.Provider value={null}>
//       {memorizedChildren}
//     </TodoListContext.Provider>
//   );
// }

// // TODO: dokumentieren dass das context feature bugged war und file löschen
