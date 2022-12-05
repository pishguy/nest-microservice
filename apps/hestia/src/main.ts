import { NestFactory } from '@nestjs/core';
import { HestiaModule } from './hestia-module';
import {ValidationPipe} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(HestiaModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap().then(r => {});
