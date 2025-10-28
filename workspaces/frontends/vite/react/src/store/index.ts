import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "~/store/slices/todos";

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
