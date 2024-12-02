import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "~/store";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// TODO: Check differences: https://redux-toolkit.js.org/usage/migrating-rtk-2#react-redux
// export const useSelector = createSelectorHook(context).withTypes<RootState>()
