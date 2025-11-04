import { Inject, Injectable } from '@nestjs/common';
import type { Env } from '~/env.model';

@Injectable()
export class DatabaseService {
  constructor(@Inject('env') private readonly env: Env) {
    console.log({ env });
    const pool = new Pool()
  }

  query<T>(query: string): T {
    console.log(query);
    return {} as T;
  }
}
