import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { DatabaseService } from "~/database/database.service";
import { UserTask } from "~/database/entities/user-tasks/user-tasks.entity";
import { RepositoryModel } from "~/database/repository.model";

@Injectable()
export class UserTasksService implements RepositoryModel<UserTask> {
  constructor(private readonly databaseService: DatabaseService) {}

  async get(id: string) {
    const queryText = `SELECT * FROM user_tasks WHERE id=$1`;
    const response = await this.databaseService.query(queryText, [id]);

    return plainToInstance(UserTask, response.rows[0]);
  }

  async add(task: UserTask) {
    const queryText = `INSERT INTO user_tasks (text) $1 RETURNING *`;
    const response = await this.databaseService.query(queryText, [task.text]);

    return plainToInstance(UserTask, response.rows[0]);
  }

  async delete(id: string) {
    const queryText = `DELETE FROM user_tasks WHERE id=$1`;
    const response = await this.databaseService.query(queryText, [id]);

    if (response.rowCount === 0) {
      throw new Error(`Task with id ${id} not found`);
    }

    return plainToInstance(UserTask, response.rows[0]);
  }

  async update(task: UserTask) {
    const queryText = `
      UPDATE posts
      SET text = $2
      WHERE id = $1
      RETURNING *
    `;
    const response = await this.databaseService.query(queryText, [
      task.id,
      task.text,
    ]);

    return plainToInstance(UserTask, response.rows[0]);
  }

  async getAll() {
    const queryText = `SELECT * FROM user_tasks`;
    const response = await this.databaseService.query(queryText);

    return response.rows.map((row) => plainToInstance(UserTask, row));
  }
}
