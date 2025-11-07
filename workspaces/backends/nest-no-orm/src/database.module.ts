import { Global, Module } from "@nestjs/common";
import { DatabasePoolModule } from "~/database-pool.module";
import { DatabaseService } from "~/database.service";

@Global()
@Module({
  imports: [DatabasePoolModule],
  exports: [DatabaseService],
  providers: [DatabaseService],
})
export class DatabaseModule {}
