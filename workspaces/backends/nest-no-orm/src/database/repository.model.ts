abstract class RepositoryMethods {
  abstract get(...args: unknown[]): Promise<unknown>;
  abstract add(...args: unknown[]): Promise<unknown>;
  abstract delete(...args: unknown[]): Promise<unknown>;
  abstract update(...args: unknown[]): Promise<unknown>;
  abstract getAll(...args: unknown[]): Promise<unknown>;
}

export abstract class RepositoryModel<
  Out,
  CreateDto,
  UpdateDto = CreateDto
> extends RepositoryMethods {
  abstract get(id: string): Promise<Out>;
  abstract add(item: CreateDto): Promise<Out>;
  abstract delete(id: string): Promise<Out>;
  abstract update(id: string, item: UpdateDto): Promise<Out>;
  abstract getAll(): Promise<Out[]>;
}

// TODO: Could now type it stricter.
export abstract class RepositoryController extends RepositoryMethods {
  abstract get(...args: unknown[]): Promise<unknown>;
  abstract add(...args: unknown[]): Promise<unknown>;
  abstract delete(...args: unknown[]): Promise<unknown>;
  abstract update(...args: unknown[]): Promise<unknown>;
  abstract getAll(...args: unknown[]): Promise<unknown[]>;
}
