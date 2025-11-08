import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import {
  CreateUserTaskDto,
  UpdateUserTaskDto,
} from "~/database/entities/user-tasks/user-tasks.dto";
import { UserTasksService } from "~/database/entities/user-tasks/user-tasks.service";
import { RepositoryController } from "~/database/repository.model";

@Controller("user-tasks")
export class UserTasksController implements RepositoryController {
  constructor(private readonly userTaskService: UserTasksService) {}

  @Get()
  async getAll() {
    return this.userTaskService.getAll();
  }

  @Get(":id")
  get(@Param("id") id: string) {
    return this.userTaskService.get(id);
  }

  @Get("/filter")
  async filter(@Query("text") text: string, @Query("exact") exact: boolean) {
    return this.userTaskService.search(text, exact);
  }

  @Post()
  async add(@Body() userTask: CreateUserTaskDto) {
    return this.userTaskService.add(userTask);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() userTask: UpdateUserTaskDto) {
    return this.userTaskService.update(id, userTask);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.userTaskService.delete(id);
  }
}
