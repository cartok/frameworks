import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import type { DatabaseService } from '~/database.service';
import type { RepositoryModel } from '~/repository.model';
import { UserTask } from '~/user-task.entity';

@Injectable()
export class UserTaskService implements RepositoryModel<UserTask> {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(id: string) {
    const queryText = `SELECT * FROM UserTasks WHERE id=${id};`;
    const response = await this.databaseService.query(queryText);
    return plainToInstance(UserTask, response[0]);
  }

  async add() {
    await this.databaseService.query(`
    `);
  }

  async delete() {
    await this.databaseService.query(`
    `);
  }

  async update() {
    await this.databaseService.query(`
    `);
  }

  async getAll() {
    const response = await this.databaseService.query(`
      SELECT * FROM user-task;
    `);
    return plainToInstance(UserTask, response);
  }

  async clear() {
    await this.databaseService.query(`
    `);
  }
}
