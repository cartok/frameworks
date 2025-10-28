import "@cartok/todo-list-styles/components/TodoList.css";
import { useCallback, useState, type FormEvent } from "react";
import { Button } from "~/components/Button";
import { TextInputControlled } from "~/components/TextInput";
import { TodoListItemRedux } from "~/components/TodoListItemRedux";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { addTodo, selectTodos } from "~/store/slices/todos";

export function TodoListRedux() {
  const [text, setText] = useState<string>("");
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const submitAddToList = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (!text) {
        return;
      }

      dispatch(addTodo({ text }));
    },
    [dispatch, text]
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
        {todos.map(([id, item]) => (
          <TodoListItemRedux id={id} key={id}>
            {item.text}
          </TodoListItemRedux>
        ))}
      </ul>
    </div>
  );
}
