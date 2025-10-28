/* @refresh reload */
import "@cartok/todo-list-styles";
import { render } from "solid-js/web";
import App from "./App";

const root = document.getElementById("root");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(() => <App />, root!);
