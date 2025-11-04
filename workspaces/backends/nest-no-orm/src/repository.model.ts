export type RepositoryModel<T> = {
  get(id: string): T;
  add(item: T): T;
  delete(id: string): T;
  update(item: T): T;
  getAll(): T[];
  clear(): void;
};
