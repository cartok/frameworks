import { Module } from "@nestjs/common";
import { UserTasksController } from "~/database/entities/user-tasks/user-tasks.controller";
import { UserTasksService } from "~/database/entities/user-tasks/user-tasks.service";

@Module({
  controllers: [UserTasksController],
  providers: [UserTasksService],
})
export class UserTasksModule {}
