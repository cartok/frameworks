export type RepositoryModel<T> = {
  get(id: string): Promise<T>;
  add(item: T): Promise<T>;
  delete(id: string): Promise<T>;
  update(item: T): Promise<T>;
  getAll(): Promise<T[]>;
};
