export type RepositoryModel<T> = {
  get(id: string): Promise<T>;
  add(item: T): Promise<void>;
  delete(id: string): Promise<void>;
  update(item: T): Promise<void>;
  getAll(): Promise<T[]>;
  clear(): Promise<void>;
};
