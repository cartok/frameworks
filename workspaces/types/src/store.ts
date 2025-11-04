// TODO: Unite with UserTask from NestJS project.
export type TodoListItem = { text: string };
export type Store = { todos: Map<string, TodoListItem> };
