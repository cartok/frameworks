import type { TodoListItem } from "@cartok/todo-list-types";
import {
  createSelector,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import type { RootState } from "~/store";

enableMapSet();

const initialState = new Map<string, TodoListItem>(
  new Map([
    [crypto.randomUUID(), { text: "1. foo" }],
    [crypto.randomUUID(), { text: "2. bar" }],
    [
      crypto.randomUUID(),
      {
        text: "3. Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque.",
      },
    ],
  ])
);

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoListItem>) => {
      const id = crypto.randomUUID();
      state.set(id, action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.delete(action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export const selectTodos = createSelector(
  (state: RootState) => state.todos,
  (todos) => Array.from(todos.entries()).reverse()
);
