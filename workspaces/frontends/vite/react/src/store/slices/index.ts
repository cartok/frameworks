import { combineSlices } from "@reduxjs/toolkit";
import { todosSlice } from "./todos";

export const reducer = combineSlices(todosSlice);
