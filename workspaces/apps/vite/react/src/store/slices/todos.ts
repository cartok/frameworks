import type { TodoListItem } from "@cartok/todo-list-types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/store";
import { createSelector } from "@reduxjs/toolkit";

const initialState = new Map<string, TodoListItem>(
  new Map([
    [
      crypto.randomUUID(),
      {
        text: "Suspendisse pulvinar risus dapibus mi volutpat, vitae iaculis turpis pellentesque.",
      },
    ],
    [crypto.randomUUID(), { text: "bar" }],
    [crypto.randomUUID(), { text: "foo" }],
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
  (todos) => Array.from(todos.entries())
);
