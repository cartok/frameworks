import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "~/store/slices/todos";

export const store = configureStore({
  reducer: combineSlices(todosSlice),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
