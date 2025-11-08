export type Env = {
  NODE_ENV: 'development' | 'production' | 'test';
  API_PORT: number;
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;
  DATABASE_DATABASE: string;
};
