import "@cartok/todo-list-styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "~/store";
import App from "./AppRedux";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      {/* TODO: get it running https://chatgpt.com/c/674ddea7-bafc-8002-9d53-49f3e90e75f2 */}
      <h1>redux</h1>
      <App />
    </Provider>
  </StrictMode>
);
