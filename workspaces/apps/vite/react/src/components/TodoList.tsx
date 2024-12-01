import "@cartok/todo-list-styles/components/TodoList.css";
import { useCallback, useContext, useState, type FormEvent } from "react";
import { Button } from "~/components/Button";
import { TextInputControlled } from "~/components/TextInput";
import { TodoListStoreContext } from "~/components/TodoList.store";
import { TodoListFormItem } from "~/components/TodoListItem";

export function TodoList() {
  const [text, setText] = useState<string>("");
  const { state, dispatch } = useContext(TodoListStoreContext);

  const submitAddToList = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!text) {
        return;
      }

      dispatch({ type: "add-to-list", item: { text } });
    },
    // TODO: Check linting.
    [text]
  );

  return (
    <div className="todo-list">
      <form className="form" onSubmit={submitAddToList}>
        <TextInputControlled value={text} setValue={setText} />
        <Button element={{ tag: "button", attributes: { type: "submit" } }}>
          add
        </Button>
      </form>
      <ul className="list">
        {Array.from(state.items.entries()).map(([id, item]) => (
          // TODO: React linting should ask for key!
          <TodoListFormItem id={id} key={id}>
            {item.text}
          </TodoListFormItem>
        ))}
      </ul>
    </div>
  );
}
