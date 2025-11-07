import { Inject, Injectable } from "@nestjs/common";
import { Pool } from "pg";
import { INJECTION_KEY_DATABASE_POOL } from "~/database.module";

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(INJECTION_KEY_DATABASE_POOL) private readonly pool: Pool
  ) {}

  async query(query: string, values?: unknown[]) {
    const result = await this.pool.query(query, values);

    return result;
  }
}
