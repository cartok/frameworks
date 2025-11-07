import { Controller, Get } from "@nestjs/common";
import { UserTasksService } from "~/user-tasks.service";

@Controller("user-tasks")
export class UserTasksController {
  constructor(private readonly userTaskService: UserTasksService) {}

  @Get()
  async getAll() {
    return await this.userTaskService.getAll();
  }
}
