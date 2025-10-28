import "@cartok/todo-list-styles";
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "~/store";
import App from "./AppRedux";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(`Element with id 'root' is missing in the HTML entry.`);
}

hydrateRoot(
  rootElement,
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
