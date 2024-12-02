import type { TodoListItem } from "@cartok/todo-list-types";
import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: new Map(),
  reducers: {
    addTodo: (
      state,
      { payload }: { payload: { id: string; item: TodoListItem } }
    ) => {
      state.set(payload.id, payload.item);
    },
    removeTodo: (state, { payload }: { payload: { id: string } }) => {
      state.delete(payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
