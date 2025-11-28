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
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from "@nestjs/swagger";
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
  @ApiOperation({ summary: "Get all user tasks" })
  @ApiResponse({ status: 200, description: "The user tasks were found" })
  async getAll() {
    return this.userTaskService.getAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a user task by ID" })
  @ApiParam({ name: "id", description: "The ID of the user task to get" })
  @ApiResponse({ status: 200, description: "The user task was found" })
  @ApiResponse({ status: 404, description: "No user task was found" })
  get(@Param("id") id: string) {
    return this.userTaskService.get(id);
  }

  @Get("/filter")
  @ApiOperation({ summary: "Filter user tasks by text" })
  @ApiQuery({
    name: "text",
    description: "Substring to search within user tasks",
    required: true,
  })
  @ApiQuery({
    name: "exact",
    description: "When true, matches must be exact (whole text match)",
    required: false,
  })
  @ApiResponse({ status: 200, description: "The user tasks were found" })
  @ApiResponse({ status: 404, description: "No user tasks were found" })
  async filter(
    @Query("text")
    text: string,
    @Query("exact")
    exact?: boolean
  ) {
    return this.userTaskService.search(text, exact);
  }

  @Post()
  @ApiOperation({ summary: "Add a user task" })
  @ApiBody({ type: CreateUserTaskDto, description: "The user task to add" })
  @ApiResponse({ status: 201, description: "The user task was added" })
  @ApiResponse({ status: 400, description: "Bad request" })
  async add(@Body() userTask: CreateUserTaskDto) {
    return this.userTaskService.add(userTask);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a user task by ID" })
  @ApiParam({ name: "id", description: "The ID of the user task to update" })
  @ApiBody({ type: UpdateUserTaskDto, description: "The user task to update" })
  @ApiResponse({ status: 200, description: "The user task was updated" })
  @ApiResponse({ status: 404, description: "No user task was found" })
  update(@Param("id") id: string, @Body() userTask: UpdateUserTaskDto) {
    return this.userTaskService.update(id, userTask);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a user task by ID" })
  @ApiParam({ name: "id", description: "The ID of the user task to delete" })
  @ApiResponse({ status: 200, description: "The user task was deleted" })
  @ApiResponse({ status: 404, description: "No user task was found" })
  delete(@Param("id") id: string) {
    return this.userTaskService.delete(id);
  }
}
