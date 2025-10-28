import "@cartok/todo-list-styles";
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { store } from "~/store";
import App from "./AppRedux";

export function render() {
  return renderToString(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}
