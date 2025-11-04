import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import type { Env } from '~/env.model';

@Global()
@Module({
  providers: [
    {
      provide: 'env',
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Env, true>): Env => {
        return {
          NODE_ENV: configService.get('NODE_ENV', { infer: true }),
          API_PORT: configService.get('API_PORT', { infer: true }),
          DATABASE_PORT: configService.get('DATABASE_PORT', { infer: true }),
          DATABASE_USER: configService.get('DATABASE_USER', { infer: true }),
          DATABASE_PASSWORD: configService.get('DATABASE_PASSWORD', {
            infer: true,
          }),
          DATABASE_DATABASE: configService.get('DATABASE_DATABASE', {
            infer: true,
          }),
        };
      },
    },
  ],
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      validationSchema: Joi.object<Env, true, Env>({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .required(),
        API_PORT: Joi.number().default(process.env.API_PORT ?? 3000),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_DATABASE: Joi.string().required(),
      }),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
})
export class EnvModule {}
