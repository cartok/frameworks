import { Global, Module } from '@nestjs/common';
import { Pool } from 'pg';
import { DatabaseService } from '~/database.service';
import type { Env } from '~/env.model';
import { INJECTION_KEY_ENV } from '~/env.module';

export const INJECTION_KEY_DATABASE_POOL = 'DATABASE_POOL';

@Global()
@Module({
  exports: [DatabaseService],
  providers: [
    DatabaseService,
    {
      provide: INJECTION_KEY_DATABASE_POOL,
      inject: [INJECTION_KEY_ENV],
      useFactory: async (env: Env) => {
        const pool = new Pool({
          host: env.DATABASE_HOST,
          port: env.DATABASE_PORT,
          user: env.DATABASE_USER,
          password: env.DATABASE_PASSWORD,
          database: env.DATABASE_DATABASE,
        });

        return await pool.connect();
      },
    },
  ],
})
export class DatabaseModule {}
