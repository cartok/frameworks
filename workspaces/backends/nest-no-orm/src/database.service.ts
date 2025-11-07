import { Inject, Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import type { Env } from '~/env.model';

@Injectable()
export class DatabaseService {
  private readonly pool = new Pool();

  constructor(@Inject('env') private readonly env: Env) {
    console.log({ env });
    // TODO: Need entirely better structure.
    this.pool.connect();
  }

  async query(query: string, values?: unknown[]) {
    const result = await this.pool.query(query, values);
    return result;
  }
}
