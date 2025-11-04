import type { TodoListItem } from '@cartok/todo-list-types';
import { Injectable } from '@nestjs/common';
import type { DatabaseService } from '~/database.service';
import type { RepositoryModel } from '~/repository.model';

@Injectable()
export class TodosRepository implements RepositoryModel<TodoListItem> {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(id: string) {
    const response = await this.databaseService.query<TodoListItem>(`
      SELECT * FROM todos;

    `);
    return response.rows;
  }

  async add() {
    const response = await this.databaseService.query(`
    `);
    return response.rows;
  }

  async delete() {
    const response = await this.databaseService.query(`
    `);
    return response.rows;
  }

  async update() {
    const response = await this.databaseService.query(`
    `);
    return response.rows;
  }

  async getAll() {
    const response = await this.databaseService.query(`
      SELECT * FROM todos;
    `);
    return response.rows;
  }

  async clear() {
    const response = await this.databaseService.query(`
    `);
    return response.rows;
  }
}
