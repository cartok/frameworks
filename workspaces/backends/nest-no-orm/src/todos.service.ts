import { Injectable } from '@nestjs/common';
import type { TodoListItem } from '@cartok/todo-list-types';
import type { TodosRepository } from '~/todos.repository';

@Injectable()
export class TodosService {
  constructor(private readonly todosRepository: TodosRepository) {}

  async get(id: string): Promise<TodoListItem> {
    const todo = await this.todosRepository.get(id);
    return todo;
  }

  async add() {
    const todo = await this.todosRepository.add();
    return todo;
  }

  async delete() {
    const todo = await this.todosRepository.delete();
    return todo;
  }

  async update() {
    const todo = await this.todosRepository.update();
    return todo;
  }

  async getAll() {
    const todos = await this.todosRepository.getAll();
    return todos;
  }

  async clear() {
    const response = await this.todosRepository.clear();
    return response;
  }
}
