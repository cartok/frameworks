import { Module } from "@nestjs/common";
import { Pool } from "pg";
import type { Env } from "~/env.model";
import { INJECTION_KEY_ENV } from "~/env.module";

export const INJECTION_KEY_DATABASE_POOL = Symbol("DATABASE_POOL");

@Module({
  providers: [
    {
      provide: INJECTION_KEY_DATABASE_POOL,
      inject: [INJECTION_KEY_ENV],
      useFactory: (env: Env): Pool => {
        return new Pool({
          host: env.DATABASE_HOST,
          port: env.DATABASE_PORT,
          user: env.DATABASE_USER,
          password: env.DATABASE_PASSWORD,
          database: env.DATABASE_DATABASE,
        });
      },
    },
  ],
  exports: [INJECTION_KEY_DATABASE_POOL],
})
export class DatabasePoolModule {}
