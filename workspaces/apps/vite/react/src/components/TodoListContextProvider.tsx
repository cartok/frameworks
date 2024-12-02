import { useReducer, type PropsWithChildren } from "react";
import { TodoListStoreContext, initialState, reducer } from "./TodoListContext";

export function TodoListStoreContextProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoListStoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TodoListStoreContext.Provider>
  );
}
