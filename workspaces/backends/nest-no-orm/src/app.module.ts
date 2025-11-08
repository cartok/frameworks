import { Module } from "@nestjs/common";
import { AppController } from "~/app.controller";
import { AppService } from "~/app.service";
import { DatabaseModule } from "~/database/database.module";
import { UserTasksModule } from "~/database/entities/user-tasks/user-tasks.module";
import { EnvModule } from "~/env/env.module";

@Module({
  imports: [EnvModule, DatabaseModule, UserTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
