import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "~/app.module";
import type { Env } from "~/env/env.model";
import { INJECTION_KEY_ENV } from "~/env/env.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true })
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );

  app.setGlobalPrefix("api");

  const openApiConfig = new DocumentBuilder()
    .setTitle("Nest No ORM API")
    .setDescription("API for the Nest No ORM backend")
    .setVersion("1.0")
    .build();

  const documentFactory = () =>
    SwaggerModule.createDocument(app, openApiConfig);
  SwaggerModule.setup("api", app, documentFactory);

  const env = app.get<Env>(INJECTION_KEY_ENV);
  await app.listen(env.API_PORT, "0.0.0.0");
}
bootstrap();
