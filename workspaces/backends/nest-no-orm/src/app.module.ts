import { Module } from "@nestjs/common";

import { AppController } from "~/app.controller";
import { AppService } from "~/app.service";
import { DatabaseModule } from "~/database.module";
import { EnvModule } from "~/env.module";
import { UserTasksModule } from "~/user-tasks.module";

@Module({
  imports: [EnvModule, DatabaseModule, UserTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
