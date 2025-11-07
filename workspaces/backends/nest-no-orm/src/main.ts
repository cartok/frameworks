import { NestFactory } from '@nestjs/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from '~/app.module';
import type { Env } from '~/env.model';
import { INJECTION_KEY_ENV } from '~/env.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );

  const env = app.get<Env>(INJECTION_KEY_ENV);

  app.setGlobalPrefix('api');
  await app.listen(env.API_PORT, '0.0.0.0');
}
bootstrap();
