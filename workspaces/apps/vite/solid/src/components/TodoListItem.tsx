import { createSignal, type ParentComponent } from "solid-js";
import { Button } from "./Button";
import { todoListStore } from "./TodoList.store";
import "./TodoListItem.css";

export const TodoListItem: ParentComponent<{ id: string }> = (props) => {
  const [beforeDelete, setBeforeDelete] = createSignal(false);

  return (
    <li class="todo-list-item">
      <span classList={{ text: true, "before-delete": beforeDelete() }}>
        {props.children}
      </span>
      {/* 
        TODO: Use form or onClick & what about a11y in this context?

        a11y müsste auch ohne form gut gehen, wenn man halt die attribute richtig verwendet, hier
        muss ich auf jeden fall noch ran.
        ich denke form ist nicht nötig, `prevent default` wäre für einen button click nötig.
        vielleicht sollte man komplett ohne form gehen, dafür noch mal genau prüfen ob die
        semantik weder seo noch a11y auch bei komplexeren formularen stören würde.
      */}
      <Button
        size="hug"
        element={{
          tag: "button",
          attributes: {
            onClick: () => todoListStore.actions.removeFromList(props.id),
            onMouseEnter: () => setBeforeDelete(true),
            onMouseLeave: () => setBeforeDelete(false),
          },
        }}
      >
        remove
      </Button>
    </li>
  );
};
