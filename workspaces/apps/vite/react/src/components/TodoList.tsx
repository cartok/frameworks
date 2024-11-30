import "@cartok/todo-list-styles/components/TodoList.css";
import { useCallback, useState, type FormEvent } from "react";
import { Button } from "~/components/Button";
import { TextInputControlled } from "~/components/TextInput";
import { todoListStore } from "~/components/TodoList.store";
// import { TodoListFormItem } from "~/components/TodoListItem";

export function TodoList() {
  const [text, setText] = useState<string>("");

  const submitAddToList = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!text) {
        return;
      }

      todoListStore.actions.addToList(text);
      // TODO: check lintint
    },
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
        {/* {[].map(([id, item]) => (
          <TodoListFormItem id={id}>{item.text}</TodoListFormItem>
        )} */}
      </ul>
    </div>
  );
}
