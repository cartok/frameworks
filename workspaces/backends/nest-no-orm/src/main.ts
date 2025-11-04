import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { Env } from './env.model';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const env = app.get<Env>('env');

  app.setGlobalPrefix('api');
  await app.listen(env.API_PORT, '0.0.0.0');
}
bootstrap();
