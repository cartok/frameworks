import { Module } from "@nestjs/common";
import { UserTasksController } from "~/user-tasks.controller";
import { UserTasksService } from "~/user-tasks.service";

@Module({
  controllers: [UserTasksController],
  providers: [UserTasksService],
})
export class UserTasksModule {}
