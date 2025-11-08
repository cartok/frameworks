import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import { Pool } from "pg";
import { INJECTION_KEY_DATABASE_POOL } from "~/database/database-pool.module";

@Injectable()
export class DatabaseService implements OnModuleInit {
  constructor(
    @Inject(INJECTION_KEY_DATABASE_POOL) private readonly pool: Pool
  ) {}

  async onModuleInit() {
    await this.runMigrations();
    await this.runSeeds();
  }

  async query(query: string, values?: unknown[]) {
    const result = await this.pool.query(query, values);
    return result;
  }

  async runMigrations() {
    const migrationsDir = path.join(__dirname, "migrations");
    const files = this.getSortedSqlFileList(migrationsDir);

    for (const file of files) {
      const filePath = path.join(migrationsDir, file);
      const sql = fs.readFileSync(filePath, "utf-8");
      console.log(`Running migration: ${file}`);
      await this.pool.query(sql);
    }
  }

  async runSeeds() {
    const seedsDir = path.join(__dirname, "seeds");
    if (!fs.existsSync(seedsDir)) {
      console.log("Seeds directory not found, skipping.");
      return;
    }

    const files = this.getSortedSqlFileList(seedsDir);

    for (const file of files) {
      const filePath = path.join(seedsDir, file);
      const sql = fs.readFileSync(filePath, "utf-8");
      console.log(`Running seed: ${file}`);
      await this.pool.query(sql);
    }
  }

  private getSortedSqlFileList(dirPath: string) {
    const files = fs.readdirSync(dirPath).sort();
    const sortedFiles = files.filter((file) => file.endsWith(".sql"));
    return sortedFiles;
  }
}
